import Web3 from 'web3';

// Constants
export const launchDate = new Date('2025-06-22T00:00:00').getTime();
export const RECEIVING_ADDRESS = '0x4764AA5B111fa4fA7Cf05997251e9ca4F76805A7';
export const USDT_CONTRACT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
export const PIN_CONTRACT_ADDRESS = '0x25163523d3374174450479fa6a8785ac96fda19b';
export const MIN_PIN_AMOUNT = 1000;
export const PIN_PRICE_USD = 0.1;
export const SALE_CONTRACT_ADDRESS = "0x71a83d62c32c244afc1f5a8d5cafb69111a5eab0";

export const CONFIG = {
    MIN_PIN_AMOUNT: 1000,
    PIN_PRICE_USD: 0.1,
    MIN_USDT_AMOUNT: 100,
    BSC_CHAIN_ID: '0x38',
    BSC_RPC_URL: 'https://bsc-dataseed1.binance.org',
    USDT_DECIMALS: 18,
    GAS_LIMIT: {
        USDT: 100000
    },
    RETRY_ATTEMPTS: 5,
    RETRY_DELAY: 2000,
    RPC_ENDPOINTS: [
        'https://bsc-dataseed1.binance.org',
        'https://bsc-dataseed2.binance.org',
        'https://bsc-dataseed3.binance.org',
        'https://bsc-dataseed4.binance.org'
    ],
    GAS_PRICE_MULTIPLIER: 1.1,
    GAS_LIMIT_MULTIPLIER: 1.2,
    DEFAULT_GAS_PRICE: '5000000000'
};

export const USDT_ABI = [
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "_spender", "type": "address"},
            {"name": "_value", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "_to", "type": "address"},
            {"name": "_value", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
    }
];

export const SALE_CONTRACT_ABI = [
    {
        "inputs": [
            {"internalType": "uint256", "name": "usdtAmount", "type": "uint256"}
        ],
        "name": "buyPINTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "usdtAmount", "type": "uint256"}
        ],
        "name": "getPINAmount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "pure",
        "type": "function"
    }
];

// Utility Functions
export const detectProvider = () => {
    if (window.ethereum) {
        if (window.ethereum.isCoinbaseWallet) return window.ethereum;
        if (window.ethereum.isMetaMask) return window.ethereum;
        if (window.ethereum.isTrust) return window.ethereum;
        return window.ethereum;
    }
    if (window.BinanceChain) return window.BinanceChain;
    return null;
};

export const switchToBSCNetwork = async (provider) => {
    try {
        await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }]
        });
    } catch (error) {
        if (error.code === 4902 || error.code === -32603) {
            try {
                await provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x38',
                        chainName: 'Binance Smart Chain',
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'BNB',
                            decimals: 18
                        },
                        rpcUrls: CONFIG.RPC_ENDPOINTS,
                        blockExplorerUrls: ['https://bscscan.com']
                    }]
                });
            } catch (addError) {
                throw new Error('Please add Binance Smart Chain to your wallet manually');
            }
        } else {
            throw error;
        }
    }
};

export const handleUSDTPayment = async (userAddress, amount) => {
    try {
        const provider = detectProvider();
        if (!provider) {
            throw new Error('Please install a supported wallet');
        }
        const web3 = new Web3(provider);
        
        if (parseFloat(amount) < 100) {
            throw new Error('Minimum purchase is 100 USDT');
        }
        
        const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
        const usdtContract = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
        const saleContract = new web3.eth.Contract(SALE_CONTRACT_ABI, SALE_CONTRACT_ADDRESS);
        
        const balance = await usdtContract.methods.balanceOf(userAddress).call();
        if (BigInt(balance) < BigInt(amountInWei)) {
            throw new Error('Insufficient USDT balance');
        }

        try {
            const approveTx = await usdtContract.methods.approve(SALE_CONTRACT_ADDRESS, amountInWei)
                .send({
                    from: userAddress,
                    gas: CONFIG.GAS_LIMIT.USDT
                });

            if (!approveTx.status) {
                throw new Error('USDT approval failed');
            }
        } catch (error) {
            console.error('Approval Error:', error);
            if (error.code === 4001) {
                throw new Error('Transaction rejected by user');
            }
            throw new Error('Failed to approve USDT transfer. Please try again.');
        }

        try {
            const buyTx = await saleContract.methods.buyPINTokens(amountInWei)
                .send({
                    from: userAddress,
                    gas: CONFIG.GAS_LIMIT.USDT
                });

            if (!buyTx.status) {
                throw new Error('Purchase failed');
            }

            return buyTx.transactionHash;
        } catch (error) {
            console.error('Purchase Error:', error);
            if (error.code === 4001) {
                throw new Error('Transaction rejected by user');
            }
            throw new Error('Failed to complete purchase. Please try again.');
        }
    } catch (error) {
        console.error('USDT Payment Error:', error);
        throw error;
    }
};

export const fetchUSDTPrice = async (retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            return parseFloat(data.price);
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
};

export const getUSDTBalance = async (userAddress) => {
    const web3 = new Web3(window.ethereum);
    const usdtContract = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
    const balance = await usdtContract.methods.balanceOf(userAddress).call();
    return web3.utils.fromWei(balance, 'ether');
};

export const getBNBBalance = async (userAddress) => {
    const web3 = new Web3(window.ethereum);
    const balance = await web3.eth.getBalance(userAddress);
    return web3.utils.fromWei(balance, 'ether');
};

export const checkNetwork = async () => {
    try {
        const response = await fetch('https://bsc-dataseed1.binance.org', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'net_version',
                params: [],
                id: 1
            })
        });
        return response.ok;
    } catch (error) {
        return false;
    }
}; 