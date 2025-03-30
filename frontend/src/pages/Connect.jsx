import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
});

const Connect = () => {
  const { activate } = useWeb3React();
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async () => {
    setConnecting(true);
    try {
      await activate(injected);
      toast.success('Wallet connected successfully!');
      navigate('/');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.error('Failed to connect wallet');
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Connect Your Wallet
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect your wallet to access all features of the BLC Staking Platform.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🔐</div>
                <h2 className="text-2xl font-bold mb-2">MetaMask</h2>
                <p className="text-gray-400 mb-6">
                  Connect your MetaMask wallet to access the platform
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={connectWallet}
                  disabled={connecting}
                  className={`w-full py-3 rounded-lg text-white font-medium ${
                    connecting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  }`}
                >
                  {connecting ? 'Connecting...' : 'Connect MetaMask'}
                </motion.button>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🔗</div>
                <h2 className="text-2xl font-bold mb-2">WalletConnect</h2>
                <p className="text-gray-400 mb-6">
                  Connect using WalletConnect compatible wallets
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg text-white font-medium bg-gray-700 hover:bg-gray-600"
                >
                  Coming Soon
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect; 