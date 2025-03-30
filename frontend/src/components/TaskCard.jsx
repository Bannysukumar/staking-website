import { motion } from 'framer-motion';

const TaskCard = ({ task, onAccept, isAccepting, isConnected }) => {
  return (
    <motion.div
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
          <h4 className="text-sm font-medium text-gray-400 mb-2">Deadline</h4>
          <p className="text-gray-300 text-sm">{task.deadline}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Milestones</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            {task.milestones.map((milestone, index) => (
              <li key={index}>{milestone}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Prerequisites</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            {task.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAccept}
          disabled={isAccepting || !isConnected}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
            isAccepting || !isConnected
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
          }`}
        >
          {isAccepting ? 'Accepting...' : 'Accept Task'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TaskCard; 