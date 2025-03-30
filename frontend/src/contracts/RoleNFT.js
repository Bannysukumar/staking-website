import { ethers } from 'ethers';

// Contract ABI - Replace with your actual contract ABI after deployment
export const ROLE_NFT_ABI = [
  "function mint(uint256 roleId) public payable returns (uint256)",
  "function getRoleDetails(uint256 roleId) public view returns (string memory title, string memory description, uint256 requiredStake)",
  "function hasRole(address account, uint256 roleId) public view returns (bool)",
  "function totalSupply() public view returns (uint256)",
  "function ownerOf(uint256 tokenId) public view returns (address)",
  "event RoleMinted(address indexed owner, uint256 indexed roleId, uint256 indexed tokenId)"
];

// Contract address - Replace with your actual deployed contract address
export const ROLE_NFT_ADDRESS = "0x0000000000000000000000000000000000000000";

export class RoleNFTContract {
  constructor(provider) {
    this.contract = new ethers.Contract(ROLE_NFT_ADDRESS, ROLE_NFT_ABI, provider);
  }

  async mint(roleId, stakeAmount) {
    try {
      const tx = await this.contract.mint(roleId, {
        value: ethers.utils.parseEther(stakeAmount.toString())
      });
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      console.error('Error minting role NFT:', error);
      throw error;
    }
  }

  async getRoleDetails(roleId) {
    try {
      const details = await this.contract.getRoleDetails(roleId);
      return {
        title: details.title,
        description: details.description,
        requiredStake: ethers.utils.formatEther(details.requiredStake)
      };
    } catch (error) {
      console.error('Error getting role details:', error);
      throw error;
    }
  }

  async hasRole(account, roleId) {
    try {
      return await this.contract.hasRole(account, roleId);
    } catch (error) {
      console.error('Error checking role:', error);
      throw error;
    }
  }
} 