import { ethers } from 'ethers';

// Contract ABI - Replace with your actual contract ABI after deployment
export const TASK_NFT_ABI = [
  "function mint(uint256 taskId) public returns (uint256)",
  "function getUserTasks(address user) public view returns (uint256[])",
  "function getTaskDetails(uint256 taskId) public view returns (string memory title, string memory description, uint256 reward, uint256 deadline, string[] memory milestones, string[] memory prerequisites)",
  "function updateTaskStatus(uint256 taskId, string memory status) public",
  "function submitTask(uint256 taskId, string memory submission) public",
  "function reviewTask(uint256 taskId, bool approved, string memory feedback) public",
  "function getTaskStatus(uint256 taskId) public view returns (string memory)",
  "event TaskMinted(address indexed owner, uint256 indexed taskId, uint256 indexed tokenId)",
  "event TaskStatusUpdated(uint256 indexed taskId, string status)",
  "event TaskSubmitted(uint256 indexed taskId, address indexed submitter)",
  "event TaskReviewed(uint256 indexed taskId, bool approved)"
];

// Contract address - Replace with your actual deployed contract address
export const TASK_NFT_ADDRESS = "0x0000000000000000000000000000000000000000";

export class TaskNFTContract {
  constructor(provider) {
    this.contract = new ethers.Contract(TASK_NFT_ADDRESS, TASK_NFT_ABI, provider);
  }

  async mint(taskId) {
    try {
      const tx = await this.contract.mint(taskId);
      return tx;
    } catch (error) {
      console.error('Error minting task NFT:', error);
      throw error;
    }
  }

  async getUserTasks(userAddress) {
    try {
      const tasks = await this.contract.getUserTasks(userAddress);
      return tasks;
    } catch (error) {
      console.error('Error getting user tasks:', error);
      throw error;
    }
  }

  async getTaskDetails(taskId) {
    try {
      const details = await this.contract.getTaskDetails(taskId);
      return {
        title: details.title,
        description: details.description,
        reward: ethers.utils.formatEther(details.reward),
        deadline: new Date(details.deadline * 1000).toISOString(),
        milestones: details.milestones,
        prerequisites: details.prerequisites
      };
    } catch (error) {
      console.error('Error getting task details:', error);
      throw error;
    }
  }

  async updateTaskStatus(taskId, status) {
    try {
      const tx = await this.contract.updateTaskStatus(taskId, status);
      return tx;
    } catch (error) {
      console.error('Error updating task status:', error);
      throw error;
    }
  }

  async submitTask(taskId, submission) {
    try {
      const tx = await this.contract.submitTask(taskId, submission);
      return tx;
    } catch (error) {
      console.error('Error submitting task:', error);
      throw error;
    }
  }

  async reviewTask(taskId, approved, feedback) {
    try {
      const tx = await this.contract.reviewTask(taskId, approved, feedback);
      return tx;
    } catch (error) {
      console.error('Error reviewing task:', error);
      throw error;
    }
  }

  async getTaskStatus(taskId) {
    try {
      const status = await this.contract.getTaskStatus(taskId);
      return status;
    } catch (error) {
      console.error('Error getting task status:', error);
      throw error;
    }
  }
} 