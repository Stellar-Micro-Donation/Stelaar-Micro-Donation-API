# Stellar Micro Donation Platform

A decentralized micro-donation platform built on Stellar blockchain.

## Project Structure

```
├── frontend/          # React + TypeScript frontend
├── backend/           # Node.js + Express API
├── contracts/         # Stellar Soroban smart contracts
└── shared/            # Shared types and constants
```

## Getting Started

### Prerequisites
- Node.js 18+
- Rust & Cargo (for contracts)
- Stellar CLI (soroban-cli)

### Installation

```bash
# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd backend && npm install

# Build contracts
cd contracts && cargo build --target wasm32-unknown-unknown --release
```

### Running Locally

```bash
# Start backend
cd backend && npm run dev

# Start frontend
cd frontend && npm run dev

# Or use Docker
docker-compose up
```

## Features

- Micro donations via Stellar network
- Smart contract integration
- Real-time transaction tracking
- User wallet management