export interface Donation {
  id: string;
  donor: string;
  recipient: string;
  amount: number;
  timestamp: number;
}

export interface User {
  id: string;
  publicKey: string;
  username: string;
}
