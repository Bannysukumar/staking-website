import { motion } from 'framer-motion';
import { useState } from 'react';

const Governance = () => {
  const [activeTab, setActiveTab] = useState('dao');
  const [newProposal, setNewProposal] = useState({ title: '', description: '', duration: '7' });
  const [newCampaign, setNewCampaign] = useState({ title: '', description: '', target: '', reward: '' });

  // Mock data for proposals
  const proposals = {
    current: [
      {
        id: 1,
        title: 'Implement AI Task Verification System',
        description: 'Proposal to integrate AI-powered verification for task completion',
        status: 'active',
        votes: 1250,
        endDate: '2024-04-15',
        creator: '0x1234...5678'
      },
      {
        id: 2,
        title: 'Update Staking Rewards Structure',
        description: 'Proposal to adjust APY rates for different staking durations',
        status: 'active',
        votes: 850,
        endDate: '2024-04-20',
        creator: '0x8765...4321'
      }
    ],
    passed: [
      {
        id: 3,
        title: 'Launch Medical Research Module',
        description: 'Proposal to develop and deploy medical research data sharing system',
        status: 'passed',
        votes: 2500,
        endDate: '2024-03-15',
        creator: '0xabcd...efgh'
      }
    ],
    rejected: [
      {
        id: 4,
        title: 'Modify Token Distribution',
        description: 'Proposal to change token distribution mechanism',
        status: 'rejected',
        votes: 1200,
        endDate: '2024-03-10',
        creator: '0xijkl...mnop'
      }
    ]
  };

  // Mock data for campaigns
  const campaigns = [
    {
      id: 1,
      title: 'Healthcare Blockchain Awareness',
      description: 'Educating healthcare professionals about blockchain benefits',
      target: '1000',
      current: '750',
      reward: '500 BLC',
      status: 'active'
    },
    {
      id: 2,
      title: 'DeFi Security Best Practices',
      description: 'Promoting secure DeFi practices in the community',
      target: '800',
      current: '600',
      reward: '300 BLC',
      status: 'active'
    }
  ];

  const handleCreateProposal = (e) => {
    e.preventDefault();
    // TODO: Implement proposal creation logic
    console.log('Creating proposal:', newProposal);
  };

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    // TODO: Implement campaign creation logic
    console.log('Creating campaign:', newCampaign);
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
            Governance & Awareness
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Participate in DAO governance and create awareness campaigns for healthcare and finance
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('dao')}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'dao'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
            }`}
          >
            DAO Dashboard
          </button>
          <button
            onClick={() => setActiveTab('awareness')}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'awareness'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Awareness Campaigns
          </button>
        </div>

        {activeTab === 'dao' ? (
          <div className="space-y-8">
            {/* Voting Power Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4">Your Voting Power</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Staked BLC</div>
                  <div className="text-2xl font-bold">10,000 BLC</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Voting Weight</div>
                  <div className="text-2xl font-bold">1.5x</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Active Votes</div>
                  <div className="text-2xl font-bold">3</div>
                </div>
              </div>
            </motion.div>

            {/* Proposals Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Proposals</h2>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Create Proposal
                </button>
              </div>

              <div className="space-y-6">
                {/* Current Proposals */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Current Proposals</h3>
                  <div className="space-y-4">
                    {proposals.current.map((proposal) => (
                      <div key={proposal.id} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{proposal.title}</h4>
                            <p className="text-gray-400 text-sm mt-1">{proposal.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">Votes: {proposal.votes}</div>
                            <div className="text-sm text-gray-400">Ends: {proposal.endDate}</div>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-4">
                          <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm">
                            Vote Yes
                          </button>
                          <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm">
                            Vote No
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Passed Proposals */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Passed Proposals</h3>
                  <div className="space-y-4">
                    {proposals.passed.map((proposal) => (
                      <div key={proposal.id} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{proposal.title}</h4>
                            <p className="text-gray-400 text-sm mt-1">{proposal.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-green-400">Passed</div>
                            <div className="text-sm text-gray-400">Votes: {proposal.votes}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rejected Proposals */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Rejected Proposals</h3>
                  <div className="space-y-4">
                    {proposals.rejected.map((proposal) => (
                      <div key={proposal.id} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{proposal.title}</h4>
                            <p className="text-gray-400 text-sm mt-1">{proposal.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-red-400">Rejected</div>
                            <div className="text-sm text-gray-400">Votes: {proposal.votes}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Campaign Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4">Campaign Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Active Campaigns</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Total Reach</div>
                  <div className="text-2xl font-bold">1.2M</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Total Rewards</div>
                  <div className="text-2xl font-bold">800 BLC</div>
                </div>
              </div>
            </motion.div>

            {/* Campaign List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Active Campaigns</h2>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Create Campaign
                </button>
              </div>

              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{campaign.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{campaign.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Reward: {campaign.reward}</div>
                        <div className="text-sm text-gray-400">
                          Progress: {campaign.current}/{campaign.target}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{
                            width: `${(parseInt(campaign.current) / parseInt(campaign.target)) * 100}%`
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <button className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm">
                        Share
                      </button>
                      <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm">
                        Tip
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Governance; 