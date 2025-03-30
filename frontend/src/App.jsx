import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Toaster } from 'react-hot-toast';
import { DApp } from './components/DApp';
import { Navigation } from './components/Navigation';
import Introduction from './pages/Introduction';
import Home from './pages/Home';
import RoleBoard from './pages/RoleBoard';
import TaskBoard from './pages/TaskBoard';
import TaskDashboard from './pages/TaskDashboard';
import Vision from './pages/Vision';
import Roadmap from './pages/Roadmap';
import Governance from './pages/Governance';
import Contact from './pages/Contact';
import Connect from './pages/Connect';
import Buy from './pages/Buy';
import './App.css';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function AppContent() {
  const location = useLocation();
  const showNavigation = location.pathname !== '/' && location.pathname !== '/buy';

  return (
    <DApp>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {showNavigation && <Navigation />}
        <main className={showNavigation ? "pt-16" : ""}>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/roles" element={<RoleBoard />} />
            <Route path="/tasks" element={<TaskBoard />} />
            <Route path="/task-dashboard" element={<TaskDashboard />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#1F2937',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </DApp>
  );
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
