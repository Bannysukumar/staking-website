import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { toast } from 'react-hot-toast';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
});

const Introduction = () => {
  const { activate } = useWeb3React();
  const navigate = useNavigate();

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please install MetaMask to connect your wallet');
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      await activate(injected);
      // Navigate to dashboard after successful connection
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.error('Failed to connect wallet');
    }
  };

  const features = [
    {
      title: 'Staking Platform',
      description: 'Stake your BLC tokens and earn rewards while contributing to the ecosystem.',
      icon: '💰',
      link: '/'
    },
    {
      title: 'Role-Based System',
      description: 'Get assigned roles based on your skills and contribute to the platform.',
      icon: '🎭',
      link: '/roles'
    },
    {
      title: 'Task Management',
      description: 'Complete tasks and earn rewards based on your role and performance.',
      icon: '✅',
      link: '/tasks'
    },
    {
      title: 'Governance',
      description: 'Participate in platform decisions and shape the future of the ecosystem.',
      icon: '🏛️',
      link: '/governance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-gradient"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              BlockLogger – Decentralized Workflows. On-Chain Rewards.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Stake, Mint, Work, and Earn in the new real-time Web3 economy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={connectWallet}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium"
              >
                Stake BLC & Start Now
              </motion.button>
              <Link to="/roles">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium border border-gray-700"
                >
                  View Roles
                </motion.button>
              </Link>
              <a href="https://drive.google.com/file/d/1NidCistVWYvKRYNmgCZItmc7uZN0xhEZ/view?pli=1" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium border border-gray-700"
                >
                  Read Whitepaper
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Visuals */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-48 h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            What is BlockLogger?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A decentralized project management protocol powered by a purpose-built blockchain
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Core Features</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Tracks roles, tasks, and contributor efficiency via NFTs & Smart Contracts
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Serves the Medical AI and Fintech AI industries with high-trust, real-time workflows
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">1</span>
                Stake BLC
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">2</span>
                Mint Role NFT
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">3</span>
                Access Task Board
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">4</span>
                Complete Tasks
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">5</span>
                Mint Task NFT
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">6</span>
                Get Paid
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
        >
          <p className="text-xl text-gray-300 mb-4">
            All actions logged and verified on-chain
          </p>
          <p className="text-lg text-gray-400">
            Built to scale remote work, governed by a DAO, and powered by AI agents
          </p>
        </motion.div>
      </div>

      {/* Features Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Features Overview
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-400">Role NFT Board</h3>
            </div>
            <p className="text-gray-300">
              View and mint roles by staking BLC tokens. Each role comes with unique capabilities and earning potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-400">Task Board</h3>
            </div>
            <p className="text-gray-300">
              Mint Task NFTs based on your Role NFT. Access and complete tasks that match your role and expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-green-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-400">AI-Powered Workflows</h3>
            </div>
            <p className="text-gray-300">
              Intelligent task assignment, automated validation, and streamlined payroll processing powered by AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-yellow-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">Real-Time Metrics</h3>
            </div>
            <p className="text-gray-300">
              Comprehensive dashboard showing detailed metrics for each task and user performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-400">Automated Payments</h3>
            </div>
            <p className="text-gray-300">
              Secure and automated BLC payments through DAO-managed smart contracts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Existing Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Welcome to BLC Staking Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A revolutionary platform that combines staking, role-based contributions, and decentralized governance to create a thriving ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6">What is BLC?</h2>
            <p className="text-gray-400 mb-4">
              BLC (BlockLogger) is a utility token that powers our ecosystem. It enables:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Staking and earning rewards
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Role-based participation
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Governance voting rights
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Task completion rewards
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-400 mb-4">
              Our platform offers unique advantages:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Competitive staking rewards
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Transparent governance system
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Role-based earning opportunities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Community-driven development
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction; 