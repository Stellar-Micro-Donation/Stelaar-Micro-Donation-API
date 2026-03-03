import React, { useState } from 'react';
import DonationForm from './components/DonationForm';
import WalletConnect from './components/WalletConnect';
import DonationList from './components/DonationList';
import './index.css';

function App() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [donations, setDonations] = useState<any[]>([]);

  const handleDonation = (donation: any) => {
    setDonations([...donations, donation]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Stellar Micro Donation</h1>
        <WalletConnect 
          walletAddress={walletAddress} 
          setWalletAddress={setWalletAddress} 
        />
      </header>
      
      <main className="main">
        {walletAddress ? (
          <>
            <DonationForm 
              walletAddress={walletAddress} 
              onDonation={handleDonation} 
            />
            <DonationList donations={donations} />
          </>
        ) : (
          <div className="connect-prompt">
            <p>Connect your wallet to start donating</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
