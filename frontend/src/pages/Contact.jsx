import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('developer');
  const [developerForm, setDeveloperForm] = useState({
    name: '',
    email: '',
    githubUsername: '',
    walletAddress: '',
    skills: '',
    experience: '',
    motivation: ''
  });
  const [adminForm, setAdminForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m your AI support assistant. How can I help you today?'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleDeveloperSubmit = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    try {
      // TODO: Implement GitHub and wallet verification
      console.log('Developer form submitted:', developerForm);
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement admin form submission
      console.log('Admin form submitted:', adminForm);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    setChatMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      message: newMessage
    }]);

    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        message: 'I understand your query. Let me help you with that...'
      }]);
    }, 1000);

    setNewMessage('');
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our community as a developer or get in touch with our admin team
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('developer')}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'developer'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Developer Sign-up
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'admin'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Admin Contact
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'support'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Support Chat
          </button>
        </div>

        {activeTab === 'developer' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Developer Sign-up</h2>
            <form onSubmit={handleDeveloperSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={developerForm.name}
                  onChange={(e) => setDeveloperForm({ ...developerForm, name: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={developerForm.email}
                  onChange={(e) => setDeveloperForm({ ...developerForm, email: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  GitHub Username
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={developerForm.githubUsername}
                    onChange={(e) => setDeveloperForm({ ...developerForm, githubUsername: e.target.value })}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg"
                    onClick={() => setIsVerifying(true)}
                  >
                    Verify
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Wallet Address
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={developerForm.walletAddress}
                    onChange={(e) => setDeveloperForm({ ...developerForm, walletAddress: e.target.value })}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg"
                    onClick={() => setIsVerifying(true)}
                  >
                    Verify
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Skills & Expertise
                </label>
                <textarea
                  value={developerForm.skills}
                  onChange={(e) => setDeveloperForm({ ...developerForm, skills: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Experience
                </label>
                <textarea
                  value={developerForm.experience}
                  onChange={(e) => setDeveloperForm({ ...developerForm, experience: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Motivation
                </label>
                <textarea
                  value={developerForm.motivation}
                  onChange={(e) => setDeveloperForm({ ...developerForm, motivation: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-600"
              >
                {isVerifying ? 'Verifying...' : 'Submit Application'}
              </button>
            </form>
          </motion.div>
        ) : activeTab === 'admin' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Admin Contact Form</h2>
            <form onSubmit={handleAdminSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={adminForm.name}
                  onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={adminForm.email}
                  onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={adminForm.subject}
                  onChange={(e) => setAdminForm({ ...adminForm, subject: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Priority
                </label>
                <select
                  value={adminForm.priority}
                  onChange={(e) => setAdminForm({ ...adminForm, priority: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  value={adminForm.message}
                  onChange={(e) => setAdminForm({ ...adminForm, message: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">AI Support Chat</h2>
            <div className="h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {message.message}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact; 