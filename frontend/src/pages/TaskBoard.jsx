import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-hot-toast';
import { RoleNFTContract } from '../contracts/RoleNFT';
import { TaskNFTContract } from '../contracts/TaskNFT';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';

// Mock data - replace with actual data from smart contract
const tasks = [
  {
    id: 1,
    title: 'Implement Smart Contract Testing Framework',
    role: 'QA Tester',
    status: 'In Progress',
    deadline: '2024-04-30',
    reward: '500 BLC',
    startDate: '2024-03-15',
    completionDate: null,
    performance: {
      quality: 95,
      timeliness: 90,
      communication: 85
    },
    milestones: [
      'Set up testing environment',
      'Create test cases',
      'Implement automated tests',
      'Document test results'
    ],
    prerequisites: [
      'Solidity knowledge',
      'Testing frameworks',
      'Smart contract experience'
    ]
  },
  {
    id: 2,
    title: 'Design and Implement Web3 Dashboard',
    role: 'Frontend Developer',
    status: 'Completed',
    deadline: '2024-03-20',
    reward: '800 BLC',
    startDate: '2024-03-01',
    completionDate: '2024-03-18',
    performance: {
      quality: 98,
      timeliness: 95,
      communication: 90
    },
    milestones: [
      'Design UI/UX',
      'Implement components',
      'Integrate Web3',
      'Testing and optimization'
    ],
    prerequisites: [
      'React/Next.js',
      'Web3.js',
      'UI/UX design'
    ]
  }
];

const TaskBoard = () => {
  const { active, account, library, connector } = useWeb3React();
  const navigate = useNavigate();
  const [userRoles, setUserRoles] = useState([]);
  const [availableTasks, setAvailableTasks] = useState(tasks);
  const [userTasks, setUserTasks] = useState({});
  const [loading, setLoading] = useState(true);
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    if (library && active) {
      loadUserData();
    }

    // Handle MetaMask events
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      window.ethereum.on('disconnect', () => {
        toast.error('Wallet disconnected');
      });

      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          toast.error('Please connect your wallet');
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', () => {});
        window.ethereum.removeListener('disconnect', () => {});
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, [library, active, account]);

  const loadUserData = async () => {
    try {
      // TODO: Replace with actual contract calls
      setUserRoles(['QA Tester', 'Frontend Developer']);
      setUserTasks({});
      filterAvailableTasks(['QA Tester', 'Frontend Developer']);
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  const filterAvailableTasks = (userRoles) => {
    const available = tasks.filter(task => 
      userRoles.includes(task.role) && 
      !userTasks[task.id]
    );
    setAvailableTasks(available);
  };

  const handleMintTask = async (task) => {
    if (!active || !account) {
      toast.error('Please connect your wallet to accept a task');
      return;
    }

    setMinting(true);
    try {
      // TODO: Implement task minting logic
      console.log('Minting task:', task.id);
      toast.success('Task NFT minted successfully!');
    } catch (error) {
      console.error('Failed to mint task:', error);
      toast.error('Failed to mint task NFT');
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Task Board
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              View and accept tasks based on your role NFTs. Complete tasks to earn BLC rewards.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            {active && (
              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Connected</span>
                <span className="text-sm text-gray-400">
                  {account.slice(0, 6)}...{account.slice(-4)}
                </span>
              </div>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onAccept={() => handleMintTask(task)}
              isAccepting={minting}
              isConnected={active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard; 