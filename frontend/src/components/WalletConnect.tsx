import React from 'react';

interface WalletConnectProps {
  walletAddress: string;
  setWalletAddress: (address: string) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ walletAddress, setWalletAddress }) => {
  const connectWallet = () => {
    // Simulated wallet connection
    const mockAddress = 'G' + Math.random().toString(36).substring(2, 15).toUpperCase();
    setWalletAddress(mockAddress);
  };

  const disconnectWallet = () => {
    setWalletAddress('');
  };

  return (
    <div className="wallet-connect">
      {walletAddress ? (
        <>
          <span className="wallet-address">{walletAddress.substring(0, 8)}...</span>
          <button className="btn btn-secondary" onClick={disconnectWallet}>
            Disconnect
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
