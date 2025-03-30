import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon, trend }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="text-2xl">{icon}</div>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-white">{value}</p>
        {trend && (
          <span className={`ml-2 text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard; 