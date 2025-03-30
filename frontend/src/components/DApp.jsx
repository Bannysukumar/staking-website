import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97] // Add your supported chain IDs
});

export function DApp({ children }) {
  const { active, account, activate, deactivate } = useWeb3React();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {children}
    </div>
  );
} 