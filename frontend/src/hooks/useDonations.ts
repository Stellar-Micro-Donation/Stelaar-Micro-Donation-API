import { useState, useEffect } from 'react';

export const useDonations = () => {
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const addDonation = (donation: any) => {
    setDonations((prev) => [donation, ...prev]);
  };

  return { donations, loading, addDonation };
};
