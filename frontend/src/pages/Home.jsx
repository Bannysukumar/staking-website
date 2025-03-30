import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const StatCard = ({ title, value, change, icon }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="text-3xl">{icon}</div>
      <div className={`text-sm px-2 py-1 rounded-full ${
        change?.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
      }`}>
        {change}
      </div>
    </div>
    <h3 className="text-lg font-medium text-gray-300 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </motion.div>
);

const Home = () => {
  const { active, account } = useWeb3React();
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakeDuration, setStakeDuration] = useState('30');
  const [isStaking, setIsStaking] = useState(false);

  const handleStake = async () => {
    if (!active || !account) {
      toast.error('Please connect your wallet to stake');
      return;
    }

    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      toast.error('Please enter a valid stake amount');
      return;
    }

    setIsStaking(true);
    try {
      // TODO: Implement staking logic with smart contract
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating transaction
      toast.success('Successfully staked BLC tokens!');
      setStakeAmount('');
    } catch (error) {
      console.error('Failed to stake:', error);
      toast.error('Failed to stake tokens');
    } finally {
      setIsStaking(false);
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
            Welcome to BLC Staking Platform
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stake your BLC tokens and earn rewards while contributing to the ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            title="Total Value Locked"
            value="$1,234,567"
            change="+12.34%"
            icon="💰"
          />
          <StatCard
            title="APY"
            value="12.5%"
            change="+2.5%"
            icon="📈"
          />
          <StatCard
            title="Total Stakers"
            value="1,234"
            change="+123"
            icon="👥"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link to="/roles">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-2">Role Board</h3>
              <p className="text-gray-400">Browse and apply for available roles in the ecosystem</p>
            </motion.div>
          </Link>
          <Link to="/tasks">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Task Board</h3>
              <p className="text-gray-400">Find and complete tasks to earn rewards</p>
            </motion.div>
          </Link>
          <Link to="/task-dashboard">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">My Tasks</h3>
              <p className="text-gray-400">Track your ongoing and completed tasks</p>
            </motion.div>
          </Link>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6">Stake Your BLC</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Amount to Stake
              </label>
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Stake Duration (days)
              </label>
              <select
                value={stakeDuration}
                onChange={(e) => setStakeDuration(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">365 days</option>
              </select>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStake}
              disabled={isStaking || !stakeAmount}
              className={`w-full py-3 rounded-lg text-white font-medium ${
                isStaking || !stakeAmount
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              {isStaking ? 'Staking...' : 'Stake BLC'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 