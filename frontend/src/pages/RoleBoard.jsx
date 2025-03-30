import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-hot-toast';
import RoleCard from '../components/RoleCard';
import { RoleNFTContract } from '../contracts/RoleNFT';

// Mock data - replace with actual data from smart contract
const availableRoles = [
  {
    id: 1,
    title: 'Frontend Developer',
    icon: '💻',
    tags: ['Frontend', 'React', 'Web3'],
    description: 'Responsible for building and maintaining the user interface of our decentralized applications.',
    requiredSkills: [
      'React/Next.js',
      'Web3 Integration',
      'Smart Contract Interaction',
      'UI/UX Design',
      'TypeScript'
    ],
    hierarchyPosition: 'Mid-Level',
    requiredStake: '1000 BLC'
  },
  {
    id: 2,
    title: 'AI Analyst',
    icon: '🤖',
    tags: ['AI', 'Machine Learning', 'Data Analysis'],
    description: 'Analyzes and implements AI solutions for task verification and gig assignment.',
    requiredSkills: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Smart Contract Integration',
      'TensorFlow/PyTorch'
    ],
    hierarchyPosition: 'Senior',
    requiredStake: '2000 BLC'
  },
  {
    id: 3,
    title: 'QA Tester',
    icon: '🔍',
    tags: ['Testing', 'Quality Assurance', 'Smart Contracts'],
    description: 'Ensures the quality and reliability of smart contracts and dApp functionality.',
    requiredSkills: [
      'Smart Contract Testing',
      'Web3 Testing',
      'Security Auditing',
      'Test Automation',
      'Solidity'
    ],
    hierarchyPosition: 'Mid-Level',
    requiredStake: '800 BLC'
  }
];

const RoleBoard = () => {
  const { active, account, library } = useWeb3React();
  const [selectedRole, setSelectedRole] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [roleContract, setRoleContract] = useState(null);
  const [userRoles, setUserRoles] = useState({});

  useEffect(() => {
    if (library && active) {
      const contract = new RoleNFTContract(library.getSigner());
      setRoleContract(contract);
      loadUserRoles();
    }
  }, [library, active, account]);

  const loadUserRoles = async () => {
    if (!roleContract || !account) return;
    
    try {
      const roles = {};
      for (const role of availableRoles) {
        roles[role.id] = await roleContract.hasRole(account, role.id);
      }
      setUserRoles(roles);
    } catch (error) {
      console.error('Error loading user roles:', error);
      toast.error('Failed to load user roles');
    }
  };

  const handleMintRole = async (roleId) => {
    if (!active || !account) {
      toast.error('Please connect your wallet to mint a role');
      return;
    }

    setIsMinting(true);
    try {
      const tx = await roleContract.mint(roleId, availableRoles.find(r => r.id === roleId).requiredStake);
      toast.promise(tx.wait(), {
        loading: 'Minting Role NFT...',
        success: 'Role NFT minted successfully! 🎉',
        error: 'Failed to mint Role NFT'
      });
      
      await tx.wait();
      await loadUserRoles();
      
      // After successful minting, you can redirect to Task Board
      // navigate('/task-board');
    } catch (error) {
      console.error('Failed to mint role NFT:', error);
      toast.error(error.message || 'Failed to mint Role NFT');
    } finally {
      setIsMinting(false);
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
            Role Board
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse available roles and mint role NFTs to participate in the ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableRoles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              onMint={() => handleMintRole(role.id)}
              isMinting={isMinting}
              isConnected={active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleBoard; 