import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-hot-toast';
import { TaskNFTContract } from '../contracts/TaskNFT';
import { BadgeNFTContract } from '../contracts/BadgeNFT';

// Mock data - replace with actual data from smart contract
const mockTasks = [
  {
    id: 1,
    title: 'Implement Smart Contract',
    description: 'Create a new smart contract for task verification',
    role: 'Smart Contract Developer',
    reward: '500 BLC',
    deadline: '2024-12-31',
    status: 'in_progress',
    progress: 60,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Design UI Components',
    description: 'Create reusable UI components for the platform',
    role: 'Frontend Developer',
    reward: '300 BLC',
    deadline: '2024-12-31',
    status: 'completed',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const mockBadges = [
  {
    id: 1,
    title: 'Task Master',
    description: 'Completed 10 tasks successfully',
    icon: '🏆',
    progress: 80
  },
  {
    id: 2,
    title: 'Early Adopter',
    description: 'Joined the platform during beta',
    icon: '🚀',
    progress: 100
  }
];

const TaskDashboard = () => {
  const { active, account, library } = useWeb3React();
  const [tasks, setTasks] = useState(mockTasks);
  const [badges, setBadges] = useState(mockBadges);
  const [performance, setPerformance] = useState({
    efficiencyScore: 85,
    completionStreak: 5,
    totalRewards: '2,500 BLC',
    averageTimePerTask: '2.5 days'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (library && active) {
      loadUserData();
    }
  }, [library, active, account]);

  const loadUserData = async () => {
    setLoading(true);
    try {
      // TODO: Implement actual data loading from smart contracts
      // const taskContract = new TaskNFTContract(library.getSigner());
      // const badgeContract = new BadgeNFTContract(library.getSigner());
      // const userTasks = await taskContract.getUserTasks(account);
      // const userBadges = await badgeContract.getUserBadges(account);
      // setTasks(userTasks);
      // setBadges(userBadges);
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('Failed to load user data');
    } finally {
      setLoading(false);
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
            My Tasks
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Track your progress and manage your tasks
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold">{performance.efficiencyScore}%</div>
            <div className="text-gray-400">Efficiency Score</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold">{performance.completionStreak}</div>
            <div className="text-gray-400">Day Streak</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold">{performance.totalRewards}</div>
            <div className="text-gray-400">Total Rewards</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold">{performance.averageTimePerTask}</div>
            <div className="text-gray-400">Avg. Time/Task</div>
          </motion.div>
        </div>

        {/* Tasks Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{task.title}</h3>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                    {task.reward}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{task.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Status</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {task.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Progress</h4>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Deadline</h4>
                    <p className="text-gray-300 text-sm">{task.deadline}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
              >
                <div className="text-3xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{badge.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${badge.progress}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard; 