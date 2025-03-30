import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResearcherLanding = () => {
  const stats = {
    activeResearchers: 89,
    researchProjects: 45,
    totalFunding: '$1.2M'
  };

  const researchAreas = [
    {
      title: 'AI & Machine Learning',
      description: 'Research in decentralized AI systems and machine learning models',
      icon: '🧠'
    },
    {
      title: 'Blockchain Technology',
      description: 'Study of blockchain scalability and interoperability',
      icon: '⛓️'
    },
    {
      title: 'Healthcare Solutions',
      description: 'Research in healthcare data privacy and security',
      icon: '🏥'
    },
    {
      title: 'Financial Systems',
      description: 'Study of decentralized financial systems and protocols',
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Join Research Wing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Contribute to cutting-edge research in decentralized AI and blockchain technology
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Apply Now
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
            <div className="text-3xl mb-2">👨‍🔬</div>
            <div className="text-2xl font-bold">{stats.activeResearchers}</div>
            <div className="text-gray-400">Active Researchers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">🔬</div>
            <div className="text-2xl font-bold">{stats.researchProjects}</div>
            <div className="text-gray-400">Research Projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">💸</div>
            <div className="text-2xl font-bold">{stats.totalFunding}</div>
            <div className="text-gray-400">Total Funding</div>
          </motion.div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
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
          <h2 className="text-3xl font-bold mb-6">Research Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Funding & Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Competitive research grants</li>
                <li>• Access to computing resources</li>
                <li>• Conference travel support</li>
                <li>• Publication incentives</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Global research network</li>
                <li>• Industry partnerships</li>
                <li>• Mentorship opportunities</li>
                <li>• Knowledge sharing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Community Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Our Research Community</h2>
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

export default ResearcherLanding; 