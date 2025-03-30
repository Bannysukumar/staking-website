import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContributorLanding = () => {
  const stats = {
    rolesFilled: 156,
    tasksCompleted: 1234,
    totalPaid: '$45,678'
  };

  const onboardingSteps = [
    {
      title: 'Connect Wallet',
      description: 'Link your Web3 wallet to get started',
      icon: '🔗'
    },
    {
      title: 'Choose Your Role',
      description: 'Select from available roles based on your expertise',
      icon: '🎭'
    },
    {
      title: 'Complete Tasks',
      description: 'Work on tasks and earn rewards',
      icon: '✅'
    },
    {
      title: 'Get Rewarded',
      description: 'Receive BLC tokens for your contributions',
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Build with Us
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join our community of developers and contribute to the future of decentralized AI
            </p>
            <Link
              to="/roles"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Get Started
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
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold">{stats.rolesFilled}</div>
            <div className="text-gray-400">Roles Filled</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold">{stats.tasksCompleted}</div>
            <div className="text-gray-400">Tasks Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold">{stats.totalPaid}</div>
            <div className="text-gray-400">Total Paid</div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-400 mb-6">
            We're building a decentralized ecosystem where developers can contribute to AI-driven solutions
            while earning rewards. Our platform enables you to work on meaningful projects, collaborate
            with other developers, and be part of the future of technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Rewards</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Competitive BLC token rewards</li>
                <li>• Performance-based bonuses</li>
                <li>• Community recognition</li>
                <li>• Skill development opportunities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Flexible work schedule</li>
                <li>• Remote collaboration</li>
                <li>• Access to cutting-edge AI projects</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Onboarding Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {onboardingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
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

export default ContributorLanding; 