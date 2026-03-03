import React from 'react';

interface Donation {
  id: string;
  donor: string;
  recipient: string;
  amount: number;
  timestamp: number;
}

interface DonationListProps {
  donations: Donation[];
}

const DonationList: React.FC<DonationListProps> = ({ donations }) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="donation-list">
      <h2>Recent Donations</h2>
      {donations.length === 0 ? (
        <div className="empty-state">
          <p>No donations yet. Be the first to donate!</p>
        </div>
      ) : (
        <div>
          {donations.map((donation) => (
            <div key={donation.id} className="donation-item">
              <div className="donation-info">
                <div>
                  <strong>To:</strong> {donation.recipient.substring(0, 12)}...
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  {formatDate(donation.timestamp)}
                </div>
              </div>
              <div className="donation-amount">
                {donation.amount} XLM
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationList;
