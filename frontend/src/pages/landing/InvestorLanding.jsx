import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InvestorLanding = () => {
  const stats = {
    totalStaked: '$5.2M',
    activeStakers: 234,
    apy: '12.5%'
  };

  const stakingTiers = [
    {
      title: 'Basic',
      apy: '8%',
      minStake: '1,000 BLC',
      lockup: '30 days',
      benefits: ['Basic rewards', 'Community access', 'Newsletter']
    },
    {
      title: 'Premium',
      apy: '12%',
      minStake: '10,000 BLC',
      lockup: '90 days',
      benefits: ['Enhanced rewards', 'Governance rights', 'Priority support']
    },
    {
      title: 'Elite',
      apy: '15%',
      minStake: '100,000 BLC',
      lockup: '180 days',
      benefits: ['Maximum rewards', 'VIP events', 'Direct team access']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stake BLC & Support Decentralized AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join our ecosystem of investors and earn rewards while supporting the future of decentralized AI
            </p>
            <Link
              to="/"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Start Staking
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold">{stats.totalStaked}</div>
            <div className="text-gray-400">Total Value Staked</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold">{stats.activeStakers}</div>
            <div className="text-gray-400">Active Stakers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold">{stats.apy}</div>
            <div className="text-gray-400">Average APY</div>
          </motion.div>
        </div>
      </div>

      {/* Staking Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Staking Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stakingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
              <div className="text-3xl font-bold mb-4">{tier.apy}</div>
              <div className="text-gray-400 mb-4">APY</div>
              <div className="space-y-2 mb-6">
                <div className="text-gray-400">Min Stake: {tier.minStake}</div>
                <div className="text-gray-400">Lockup: {tier.lockup}</div>
              </div>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-400">• {benefit}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6">Investment Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Financial Rewards</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Competitive APY rates</li>
                <li>• Regular reward distributions</li>
                <li>• Bonus rewards for long-term staking</li>
                <li>• Early access to new features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Governance Rights</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Voting power in DAO decisions</li>
                <li>• Proposal creation rights</li>
                <li>• Community influence</li>
                <li>• Project direction input</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Community Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Our Investor Community</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="#"
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-3xl mb-2">💬</div>
            <div className="font-medium">Discord</div>
          </a>
          <a
            href="#"
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-3xl mb-2">🐦</div>
            <div className="font-medium">Twitter</div>
          </a>
          <a
            href="#"
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-3xl mb-2">📚</div>
            <div className="font-medium">GitHub</div>
          </a>
          <a
            href="#"
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-3xl mb-2">📄</div>
            <div className="font-medium">Docs</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestorLanding; 