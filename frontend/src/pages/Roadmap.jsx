import { motion } from 'framer-motion';
import { useState } from 'react';

const Roadmap = () => {
  const [activeQuarter, setActiveQuarter] = useState('Q1');

  const quarters = {
    Q1: {
      title: 'Role-based NFT System Launch',
      status: 'completed',
      features: [
        'Smart contract development for Role NFTs',
        'Minting interface implementation',
        'Role verification system',
        'Initial role templates',
        'Community governance framework'
      ],
      icon: '🎭'
    },
    Q2: {
      title: 'BLC Staking & Reward Structure',
      status: 'in-progress',
      features: [
        'Staking contract deployment',
        'Reward distribution system',
        'APY calculation engine',
        'Staking dashboard',
        'Reward claiming mechanism'
      ],
      icon: '💰'
    },
    Q3: {
      title: 'Integration with AI Task Agents',
      status: 'upcoming',
      features: [
        'AI agent framework development',
        'Task assignment system',
        'Performance tracking',
        'Automated reward distribution',
        'Agent reputation system'
      ],
      icon: '🤖'
    },
    Q4: {
      title: 'Medical AI + Fintech AI Modules',
      status: 'upcoming',
      features: [
        'Medical data processing pipeline',
        'Financial analysis algorithms',
        'Cross-domain integration',
        'Privacy-preserving computation',
        'Compliance verification system'
      ],
      icon: '🧠'
    },
    2026: {
      title: 'Global Expansion & Governance',
      status: 'upcoming',
      features: [
        'International deployment',
        'Decentralized governance platform',
        'Cross-chain integration',
        'Global partnership program',
        'Community-driven development'
      ],
      icon: '🌍'
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Upcoming';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Development Roadmap
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our journey to revolutionize AI-driven medical and fintech systems through blockchain technology
          </p>
        </motion.div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2"></div>
            
            {/* Progress Points */}
            <div className="relative flex justify-between">
              {Object.entries(quarters).map(([quarter, data], index) => (
                <div
                  key={quarter}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActiveQuarter(quarter)}
                >
                  <div className={`w-8 h-8 rounded-full ${getStatusColor(data.status)} flex items-center justify-center mb-2`}>
                    <span className="text-lg">{data.icon}</span>
                  </div>
                  <div className="text-sm font-medium">{quarter}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quarter Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">{quarters[activeQuarter].title}</h2>
              <div className="flex items-center mt-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(quarters[activeQuarter].status)} mr-2`}></div>
                <span className="text-gray-400">{getStatusText(quarters[activeQuarter].status)}</span>
              </div>
            </div>
            <div className="text-4xl">{quarters[activeQuarter].icon}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quarters[activeQuarter].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700/50 rounded-lg p-4 flex items-start"
              >
                <div className="text-blue-400 mr-3">•</div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Development Timeline</h3>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-700"></div>
            <div className="relative flex justify-between">
              {Object.entries(quarters).map(([quarter, data], index) => (
                <div key={quarter} className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(data.status)} mb-2`}></div>
                  <div className="text-sm text-gray-400">{quarter}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap; 