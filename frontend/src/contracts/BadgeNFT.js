import { ethers } from 'ethers';

// Contract ABI - Replace with your actual contract ABI after deployment
export const BADGE_NFT_ABI = [
  "function mintBadge(uint256 badgeId) public returns (uint256)",
  "function getUserBadges(address user) public view returns (uint256[])",
  "function getBadgeDetails(uint256 badgeId) public view returns (string memory title, string memory description, string memory icon, uint256 requirement)",
  "function checkEligibility(address user, uint256 badgeId) public view returns (bool)",
  "function getBadgeMetadata(uint256 tokenId) public view returns (string memory title, string memory description, string memory icon, uint256 earnedAt)",
  "event BadgeMinted(address indexed owner, uint256 indexed badgeId, uint256 indexed tokenId)",
  "event BadgeEligibilityUpdated(address indexed user, uint256 indexed badgeId, bool eligible)"
];

// Contract address - Replace with your actual deployed contract address
export const BADGE_NFT_ADDRESS = "0x0000000000000000000000000000000000000000";

export class BadgeNFTContract {
  constructor(provider) {
    this.contract = new ethers.Contract(BADGE_NFT_ADDRESS, BADGE_NFT_ABI, provider);
  }

  async mintBadge(badgeId) {
    try {
      const tx = await this.contract.mintBadge(badgeId);
      return tx;
    } catch (error) {
      console.error('Error minting badge:', error);
      throw error;
    }
  }

  async getUserBadges(userAddress) {
    try {
      const badges = await this.contract.getUserBadges(userAddress);
      return badges;
    } catch (error) {
      console.error('Error getting user badges:', error);
      throw error;
    }
  }

  async getBadgeDetails(badgeId) {
    try {
      const details = await this.contract.getBadgeDetails(badgeId);
      return {
        title: details.title,
        description: details.description,
        icon: details.icon,
        requirement: details.requirement
      };
    } catch (error) {
      console.error('Error getting badge details:', error);
      throw error;
    }
  }

  async checkEligibility(userAddress, badgeId) {
    try {
      const eligible = await this.contract.checkEligibility(userAddress, badgeId);
      return eligible;
    } catch (error) {
      console.error('Error checking badge eligibility:', error);
      throw error;
    }
  }

  async getBadgeMetadata(tokenId) {
    try {
      const metadata = await this.contract.getBadgeMetadata(tokenId);
      return {
        title: metadata.title,
        description: metadata.description,
        icon: metadata.icon,
        earnedAt: new Date(metadata.earnedAt * 1000).toISOString()
      };
    } catch (error) {
      console.error('Error getting badge metadata:', error);
      throw error;
    }
  }
} 