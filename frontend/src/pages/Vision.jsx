import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Vision = () => {
  const [activeTab, setActiveTab] = useState('medical');

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
            BlockLogger Vision
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering decentralized governance for AI-driven medical & fintech systems through blockchain technology
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Overview of BlockLogger</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                BlockLogger is a revolutionary platform that combines blockchain technology with AI to create transparent, 
                secure, and efficient systems for medical research and financial technology.
              </p>
              <p className="text-gray-300 mb-4">
                Our platform enables decentralized governance, ensuring that all stakeholders have a voice in the 
                development and implementation of AI-driven solutions.
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex-1 bg-blue-500/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔗</div>
                  <div className="text-sm text-blue-400">Blockchain</div>
                </div>
                <div className="flex-1 bg-purple-500/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm text-purple-400">AI</div>
                </div>
                <div className="flex-1 bg-green-500/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="text-sm text-green-400">Security</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Decentralized Governance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  AI-Powered Analytics
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Secure Data Management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Transparent Operations
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Real-time Monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Cross-chain Integration
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('medical')}
              className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === 'medical'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Medical Research
            </button>
            <button
              onClick={() => setActiveTab('fintech')}
              className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === 'fintech'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Fintech Solutions
            </button>
          </div>

          {activeTab === 'medical' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3">Medical Research</h3>
                <p className="text-gray-400 mb-4">
                  Secure and transparent data sharing for medical research, enabling collaboration while maintaining privacy.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• HIPAA-compliant data storage</li>
                  <li>• Multi-institution collaboration</li>
                  <li>• Research data validation</li>
                  <li>• Automated compliance checks</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">AFI Precision AI</h3>
                <p className="text-gray-400 mb-4">
                  Advanced AI algorithms for precise medical diagnosis and treatment recommendations.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Real-time diagnosis support</li>
                  <li>• Treatment optimization</li>
                  <li>• Predictive analytics</li>
                  <li>• Personalized care plans</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3">Health Records</h3>
                <p className="text-gray-400 mb-4">
                  Immutable and secure storage of health records with patient-controlled access.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Patient data ownership</li>
                  <li>• Access control management</li>
                  <li>• Audit trail tracking</li>
                  <li>• Interoperable records</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <div className="text-3xl mb-4">💳</div>
                <h3 className="text-xl font-semibold mb-3">Decentralized Underwriting</h3>
                <p className="text-gray-400 mb-4">
                  AI-powered credit assessment and risk evaluation for decentralized lending.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Automated risk scoring</li>
                  <li>• Real-time credit assessment</li>
                  <li>• Fraud detection</li>
                  <li>• Smart contract integration</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">DeFi Lending</h3>
                <p className="text-gray-400 mb-4">
                  Real-time analytics and risk management for decentralized finance operations.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Liquidity monitoring</li>
                  <li>• Interest rate optimization</li>
                  <li>• Collateral management</li>
                  <li>• Market trend analysis</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
                <p className="text-gray-400 mb-4">
                  Blockchain-based security for financial transactions and data integrity.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Multi-signature security</li>
                  <li>• Transaction monitoring</li>
                  <li>• Compliance verification</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span className="mr-2">📄</span>
                    Technical Whitepaper
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span className="mr-2">🔧</span>
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span className="mr-2">📚</span>
                    Integration Guide
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span className="mr-2">🎥</span>
                    Video Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Visual Resources</h3>
              <div className="aspect-video bg-gray-700/50 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎥</div>
                    <p className="text-gray-400">Platform Demo Video</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📊</div>
                    <p className="text-sm text-gray-400">Architecture</p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🔗</div>
                    <p className="text-sm text-gray-400">Workflow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision; 