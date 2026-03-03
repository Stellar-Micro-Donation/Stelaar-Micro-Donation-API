# Stellar Micro Donation Platform

A decentralized micro-donation platform built on the Stellar blockchain using Soroban smart contracts. This platform enables users to make small donations with low transaction fees, leveraging Stellar's fast and efficient network.

## 🌟 Features

- **Smart Contract Integration**: Soroban-based donation contract for secure, on-chain transactions
- **Wallet Connection**: Connect Stellar wallets to make donations
- **Real-time Tracking**: View donation history and totals
- **Low Fees**: Leverage Stellar's minimal transaction costs
- **Modern UI**: Clean, responsive interface built with React

## 📁 Project Structure

```
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API and Stellar services
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Helper functions
│   └── public/
├── backend/           # Node.js + Express API
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── models/        # Data models
│   │   └── middleware/    # Express middleware
│   └── tests/
├── contracts/         # Stellar Soroban smart contracts
│   ├── src/
│   │   └── lib.rs         # Main contract code
│   └── tests/             # Contract tests
└── shared/            # Shared types and constants
    ├── types/
    └── constants/
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **Rust & Cargo** (for smart contracts)
- **Stellar CLI** (soroban-cli)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Stellar-Micro-Donation/Stelaar-Micro-Donation-API.git
   cd Stelaar-Micro-Donation-API
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Build Smart Contracts**
   ```bash
   cd ../contracts
   cargo build --target wasm32-unknown-unknown --release
   ```

### Running Locally

#### Frontend
```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

#### Backend
```bash
cd backend
npm run dev
# Runs on http://localhost:3000
```

#### Smart Contracts (Testing)
```bash
cd contracts
cargo test
```

### Using Docker

Run all services with Docker Compose:
```bash
docker-compose up
```

This starts:
- Frontend on port 5173
- Backend on port 3000
- MongoDB on port 27017

## 🔧 Configuration

### Frontend Environment Variables

Create `.env` file in `frontend/`:
```env
VITE_API_URL=http://localhost:3000
VITE_STELLAR_NETWORK=testnet
```

### Backend Environment Variables

Create `.env` file in `backend/`:
```env
PORT=3000
STELLAR_NETWORK=testnet
MONGODB_URI=mongodb://localhost:27017/stellar-donation
```

### Contracts Environment Variables

Create `.env` file in `contracts/`:
```env
STELLAR_NETWORK=testnet
CONTRACT_ID=<your-deployed-contract-id>
```

## 📝 Smart Contract

### Contract Functions

#### `donate(donor: Address, recipient: Address, amount: i128) -> i128`
Records a donation on-chain.
- **Parameters:**
  - `donor`: Address of the donor
  - `recipient`: Address of the recipient
  - `amount`: Donation amount in stroops
- **Returns:** The donation amount

#### `get_total_donations() -> i128`
Returns the total amount of all donations.
- **Returns:** Sum of all donations

### Testing Contracts

```bash
cd contracts
cargo test

# Run specific test
cargo test test_donate

# Run with output
cargo test -- --nocapture
```

### Building for Deployment

```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release

# Optimized WASM output at:
# target/wasm32-unknown-unknown/release/stellar_donation_contract.wasm
```

### Deploying to Stellar Testnet

```bash
# Install Stellar CLI
cargo install --locked stellar-cli

# Deploy contract
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/stellar_donation_contract.wasm \
  --source <YOUR_SECRET_KEY> \
  --network testnet
```

## 🎨 Frontend Components

### Core Components

- **WalletConnect**: Handles wallet connection/disconnection
- **DonationForm**: Form for submitting donations
- **DonationList**: Displays recent donation history

### Services

- **api.ts**: Backend API integration
- **stellar.ts**: Stellar SDK wrapper for blockchain interactions

### Hooks

- **useDonations**: Manages donation state and operations

## 🔌 API Endpoints

### Donations

- `POST /donations` - Create a new donation
- `GET /donations` - Get all donations
- `GET /donations/:id` - Get donation by ID

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

### Contract Tests
```bash
cd contracts
cargo test
```

## 📦 Building for Production

### Frontend
```bash
cd frontend
npm run build
# Output in dist/
```

### Backend
```bash
cd backend
npm run build
# Output in dist/
```

### Contracts
```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release
```

## 🛠️ Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Stellar SDK
- Axios

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose

### Smart Contracts
- Rust
- Soroban SDK
- Stellar Blockchain

### DevOps
- Docker
- Docker Compose

## 🌐 Stellar Network

This project uses the Stellar testnet by default. To switch to mainnet:

1. Update environment variables to `mainnet`
2. Use mainnet Horizon server: `https://horizon.stellar.org`
3. Deploy contracts to mainnet
4. Update frontend configuration

## 📊 Project Status

**Current Progress: 40%**

✅ Completed:
- Project structure and setup
- Smart contract implementation with tests
- Basic frontend UI and components
- Backend API structure
- Docker configuration

🚧 In Progress:
- Real Stellar wallet integration (Freighter/Albedo)
- Contract deployment and integration
- Transaction history from blockchain
- User authentication
- Enhanced error handling

📋 Planned:
- User profiles and dashboards
- Donation campaigns
- Analytics and reporting
- Mobile responsive improvements
- Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Stellar Documentation](https://developers.stellar.org/)
- [Soroban Documentation](https://soroban.stellar.org/)
- [Stellar SDK](https://github.com/stellar/js-stellar-sdk)

## 💬 Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Stellar Blockchain