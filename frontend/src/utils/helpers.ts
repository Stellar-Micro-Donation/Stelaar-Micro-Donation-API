export const formatAddress = (address: string, length: number = 8): string => {
  if (!address) return '';
  return `${address.substring(0, length)}...${address.substring(address.length - 4)}`;
};

export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 7,
  }).format(amount);
};

export const validateStellarAddress = (address: string): boolean => {
  return /^G[A-Z0-9]{55}$/.test(address);
};
