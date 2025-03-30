import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { toast } from 'react-hot-toast';
import Web3 from 'web3';
import {
  launchDate,
  CONFIG,
  detectProvider,
  switchToBSCNetwork,
  handleUSDTPayment,
  fetchUSDTPrice,
  getUSDTBalance,
  getBNBBalance,
  checkNetwork
} from '../utils/buyUtils';
import {
  PIN_SALE_ABI,
  PIN_SALE_ADDRESS,
  PIN_SALE_CONSTANTS
} from '../utils/contracts';
import './Buy.css';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
});

const Buy = () => {
  const { activate, active, account, deactivate } = useWeb3React();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [blcAmount, setBlcAmount] = useState('1000');
  const [usdtAmount, setUsdtAmount] = useState('100');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [contractBalance, setContractBalance] = useState('0');

  const connectWallet = async () => {
    try {
      const provider = detectProvider();
      
      if (!provider) {
        toast.error('Please install a Web3 wallet (MetaMask, Trust Wallet, etc.)');
        return;
      }

      setIsConnecting(true);
      await activate(injected);
      await switchToBSCNetwork(provider);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.error(error.message || 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText('0x71a83d62c32c244afc1f5a8d5cafb69111a5eab0');
    toast.success('Contract address copied!');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Subscription successful!');
  };

  const handleMaxClick = async () => {
    try {
      if (!account) {
        toast.warning('Please connect wallet first');
        return;
      }

      setIsProcessing(true);
      const balance = await getUSDTBalance(account);
      const usableBalance = parseFloat(balance);

      setUsdtAmount(usableBalance.toFixed(2));
      setBlcAmount(Math.floor(usableBalance * 10).toString());

      toast.success(`Balance: ${usableBalance} USDT`);
    } catch (error) {
      console.error('Error getting balance:', error);
      toast.error(error.message || 'Error fetching balance');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBuy = async (e) => {
    e.preventDefault();
    
    try {
      if (!account) {
        toast.error('Please connect your wallet first');
        return;
      }

      const amount = usdtAmount;
      if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        toast.error('Please enter a valid amount');
        return;
      }

      setIsProcessing(true);

      try {
        const web3 = new Web3(window.ethereum);
        const saleContract = new web3.eth.Contract(PIN_SALE_ABI, PIN_SALE_ADDRESS);
        
        // Convert USDT amount to wei
        const usdtAmountWei = web3.utils.toWei(amount.toString(), 'ether');
        
        // Check if contract is paused
        const isPaused = await saleContract.methods.paused().call();
        if (isPaused) {
          throw new Error('Token sale is currently paused');
        }

        // Check contract balance
        const contractBalance = await saleContract.methods.getBLCBalance().call();
        const requiredAmount = await saleContract.methods.getBLCAmount(usdtAmountWei).call();
        
        if (BigInt(contractBalance) < BigInt(requiredAmount)) {
          throw new Error('Insufficient BLC tokens in contract');
        }

        // Execute the purchase
        const tx = await saleContract.methods.buyBLCTokens(usdtAmountWei)
          .send({
            from: account,
            gas: CONFIG.GAS_LIMIT.USDT
          });

        const bscScanUrl = `https://bscscan.com/tx/${tx.transactionHash}`;
        toast.success(
          <div>
            Transaction successful!{' '}
            <a href={bscScanUrl} target="_blank" rel="noopener noreferrer">
              View on BscScan
            </a>
          </div>
        );

      } catch (error) {
        console.error('Payment Error:', error);
        toast.error(error.message || 'Payment failed. Please try again.');
      }

    } catch (error) {
      console.error('Buy Error:', error);
      toast.error(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAccountChange = (accounts) => {
    if (accounts.length === 0) {
      // Wallet disconnected
      deactivate();
      toast.warning('Wallet Disconnected');
    }
  };

  const handleNetworkChange = () => {
    window.location.reload();
  };

  useEffect(() => {
    const targetDate = launchDate;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const init = async () => {
      if (!await checkNetwork()) {
        toast.error('Network connection issues detected');
        return;
      }

      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
      }

      // Set initial values
      setBlcAmount('1000');
      setUsdtAmount('100');
    };

    init();
  }, []);

  useEffect(() => {
    // Setup wallet event listeners
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChange);
      window.ethereum.on('chainChanged', handleNetworkChange);
    }

    // Cleanup function
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
        window.ethereum.removeListener('chainChanged', handleNetworkChange);
      }
    };
  }, []);

  // Add contract balance check
  useEffect(() => {
    const checkContractBalance = async () => {
      if (!window.ethereum) return;

      try {
        const web3 = new Web3(window.ethereum);
        const saleContract = new web3.eth.Contract(PIN_SALE_ABI, PIN_SALE_ADDRESS);
        const balance = await saleContract.methods.getBLCBalance().call();
        setContractBalance(web3.utils.fromWei(balance, 'ether'));
      } catch (error) {
        console.error('Error checking contract balance:', error);
      }
    };

    checkContractBalance();
    const interval = setInterval(checkContractBalance, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <section className="buy-pin">
        <h2>Buy BLC Coins</h2>
        <div className="buy-container">
          <div className="batch-info">
            <div className="info-row">
              <span>Minimum Purchase:</span>
              <span className="highlight">1000 BLC</span>
            </div>
            <div className="info-row">
              <span>BLC Price:</span>
              <span className="highlight">$0.1 USD</span>
            </div>
            <div className="info-row">
              <span>Min USDT Required:</span>
              <span className="highlight">100 USDT</span>
            </div>
            <div className="info-row">
              <span>Contract Balance:</span>
              <span className="highlight">{contractBalance} BLC</span>
            </div>
          </div>

          <div className="payment-options">
            <button className="payment-btn active" data-currency="USDT">
              <img src="/usdt.webp" alt="USDT" />
              <span>USDT</span>
            </button>
          </div>

          <div className="buy-form">
            <div className="input-group">
              <span className="currency-label">USDT</span>
              <input
                type="number"
                value={usdtAmount}
                onChange={(e) => {
                  setUsdtAmount(e.target.value);
                  setBlcAmount(String(Number(e.target.value) * 10));
                }}
                placeholder="Enter USDT amount"
                disabled={isProcessing}
              />
              <button 
                className="max-btn" 
                onClick={handleMaxClick}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  'MAX'
                )}
              </button>
            </div>
            <div className="conversion-arrow">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div className="input-group">
              <span className="currency-label">BLC</span>
              <input
                type="number"
                value={blcAmount}
                onChange={(e) => {
                  setBlcAmount(e.target.value);
                  setUsdtAmount(String(Number(e.target.value) / 10));
                }}
                placeholder="BLC amount"
                disabled={isProcessing}
              />
            </div>
            <button 
              className="buy-btn" 
              onClick={handleBuy}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                'Buy BLC Coins'
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy; 