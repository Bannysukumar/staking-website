import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const RoleCard = ({ role, onMint, isMinted }) => {
  const { active } = useWeb3React();

  const handleMintClick = () => {
    if (!active) return;
    onMint(role);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
          <div className="flex flex-wrap gap-2">
            {role.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-2xl">{role.icon}</div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Description</h4>
          <p className="text-gray-300 text-sm">{role.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Required Skills</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            {role.requiredSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Hierarchy Position</h4>
          <p className="text-gray-300 text-sm">{role.hierarchyPosition}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Required Stake</h4>
          <p className="text-gray-300 text-sm">{role.requiredStake}</p>
        </div>

        <div className="pt-4">
          {isMinted ? (
            <div className="w-full py-2 px-4 rounded-lg bg-green-500/20 text-green-400 text-center font-medium">
              Role NFT Minted ✓
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleMintClick}
              disabled={!active}
              className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
                active
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              {active ? `Mint Role NFT (${role.requiredStake})` : 'Connect Wallet to Mint'}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RoleCard; 