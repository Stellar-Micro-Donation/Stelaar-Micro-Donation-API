import React, { useState } from 'react';

interface DonationFormProps {
  walletAddress: string;
  onDonation: (donation: any) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ walletAddress, onDonation }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate donation transaction
    setTimeout(() => {
      const donation = {
        id: Date.now().toString(),
        donor: walletAddress,
        recipient,
        amount: parseFloat(amount),
        timestamp: Date.now(),
      };
      
      onDonation(donation);
      setRecipient('');
      setAmount('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter Stellar address"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Amount (XLM)</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Processing...' : 'Donate'}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
