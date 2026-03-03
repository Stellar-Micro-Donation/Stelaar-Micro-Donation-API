import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const donationService = {
  async createDonation(data: any) {
    const response = await axios.post(`${API_URL}/donations`, data);
    return response.data;
  },

  async getDonations() {
    const response = await axios.get(`${API_URL}/donations`);
    return response.data;
  },

  async getDonationById(id: string) {
    const response = await axios.get(`${API_URL}/donations/${id}`);
    return response.data;
  },
};
