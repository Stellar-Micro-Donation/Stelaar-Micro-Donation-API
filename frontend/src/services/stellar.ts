import * as StellarSdk from '@stellar/stellar-sdk';

const NETWORK = import.meta.env.VITE_STELLAR_NETWORK || 'testnet';
const server = new StellarSdk.Horizon.Server(
  NETWORK === 'testnet' 
    ? 'https://horizon-testnet.stellar.org'
    : 'https://horizon.stellar.org'
);

export const stellarService = {
  async getAccountBalance(publicKey: string) {
    try {
      const account = await server.loadAccount(publicKey);
      return account.balances;
    } catch (error) {
      console.error('Error fetching balance:', error);
      return [];
    }
  },

  async sendPayment(sourceSecret: string, destination: string, amount: string) {
    try {
      const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecret);
      const sourcePublicKey = sourceKeypair.publicKey();
      
      const account = await server.loadAccount(sourcePublicKey);
      
      const transaction = new StellarSdk.TransactionBuilder(account, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: NETWORK === 'testnet' 
          ? StellarSdk.Networks.TESTNET 
          : StellarSdk.Networks.PUBLIC,
      })
        .addOperation(
          StellarSdk.Operation.payment({
            destination,
            asset: StellarSdk.Asset.native(),
            amount,
          })
        )
        .setTimeout(30)
        .build();
      
      transaction.sign(sourceKeypair);
      const result = await server.submitTransaction(transaction);
      return result;
    } catch (error) {
      console.error('Payment error:', error);
      throw error;
    }
  },
};
