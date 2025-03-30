import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
});

// USDT BEP20 Contract ABI (minimal required for transfer)
const USDT_ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function balanceOf(address account) external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)"
];

// Contract addresses (Replace these with your actual contract addresses)
const USDT_CONTRACT_ADDRESS = "YOUR_USDT_CONTRACT_ADDRESS";
const BLC_CONTRACT_ADDRESS = "YOUR_BLC_CONTRACT_ADDRESS";

// Constants
const MIN_PURCHASE_USDT = 1; // Minimum 1 USDT
const BLC_RATE = 10; // 1 USDT = 10 BLC tokens

const BuyTokens = () => {
  const { account, library, activate } = useWeb3React();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please install MetaMask to connect your wallet');
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      await activate(injected);
      toast.success('Wallet connected successfully!');
      
      // If amount is already entered, proceed with purchase
      if (amount && parseFloat(amount) >= MIN_PURCHASE_USDT) {
        await buyTokens();
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.error('Failed to connect wallet');
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const calculateBLCAmount = () => {
    if (!amount) return '0';
    return (parseFloat(amount) * BLC_RATE).toFixed(2);
  };

  const handleButtonClick = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (parseFloat(amount) < MIN_PURCHASE_USDT) {
      toast.error(`Minimum purchase amount is ${MIN_PURCHASE_USDT} USDT`);
      return;
    }

    if (!account) {
      await connectWallet();
    } else {
      await buyTokens();
    }
  };

  const buyTokens = async () => {
    if (!account) {
      return; // Don't show error since we'll handle connection first
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (parseFloat(amount) < MIN_PURCHASE_USDT) {
      toast.error(`Minimum purchase amount is ${MIN_PURCHASE_USDT} USDT`);
      return;
    }

    try {
      setLoading(true);

      // Create USDT contract instance
      const usdtContract = new ethers.Contract(
        USDT_CONTRACT_ADDRESS,
        USDT_ABI,
        library.getSigner()
      );

      // Convert amount to Wei (USDT has 18 decimals)
      const amountInWei = ethers.utils.parseUnits(amount, 18);

      // Check USDT balance
      const balance = await usdtContract.balanceOf(account);
      if (balance.lt(amountInWei)) {
        toast.error('Insufficient USDT balance');
        return;
      }

      // Check and set allowance if needed
      const allowance = await usdtContract.allowance(account, BLC_CONTRACT_ADDRESS);
      if (allowance.lt(amountInWei)) {
        toast.loading('Approving USDT...');
        const approveTx = await usdtContract.approve(BLC_CONTRACT_ADDRESS, amountInWei);
        await approveTx.wait();
        toast.success('USDT approved successfully');
      }

      // Here you would call your BLC token contract's buy function
      // This is a placeholder - implement your actual contract call
      toast.success('BLC tokens purchased successfully');

    } catch (error) {
      console.error('Error buying tokens:', error);
      toast.error('Failed to buy tokens');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
      <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Buy BLC Tokens
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Amount in USDT (BEP20)</label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Min. 1 USDT"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              USDT
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Minimum purchase: {MIN_PURCHASE_USDT} USDT</p>
        </div>

        <div className="bg-gray-900/30 p-4 rounded-lg">
          <div className="flex justify-between text-gray-400 mb-2">
            <span>Rate</span>
            <span>1 USDT = {BLC_RATE} BLC</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>You will receive</span>
            <span>{calculateBLCAmount()} BLC</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleButtonClick}
          disabled={loading || (account && (!amount || parseFloat(amount) < MIN_PURCHASE_USDT))}
          className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
            loading || (account && (!amount || parseFloat(amount) < MIN_PURCHASE_USDT))
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </div>
          ) : !account ? (
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Connect Wallet to Buy
            </div>
          ) : !amount || parseFloat(amount) < MIN_PURCHASE_USDT ? (
            `Enter min. ${MIN_PURCHASE_USDT} USDT`
          ) : (
            'Buy BLC Tokens'
          )}
        </motion.button>

        <div className="space-y-2">
          <p className="text-sm text-gray-400 text-center">
            Make sure you have sufficient USDT (BEP20) in your wallet
          </p>
          <p className="text-sm text-gray-400 text-center">
            1 BLC = 0.1 USDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyTokens; 