<div align="center">

# 🔐 AWS Cloud Security Audit & Blockchain Tamper Detection

### ☁️ CloudTrail → SHA-256 → MongoDB → Blockchain → Verification

A cloud security auditing platform that captures AWS cloud activity, generates cryptographic integrity proofs, detects audit-record tampering, and displays verification results through a React dashboard.

☁️ AWS CloudTrail • 🔐 SHA-256 • 🗄️ MongoDB Atlas • ⛓️ Blockchain • ⚛️ React • 🐳 Docker • 🤖 GitHub Actions

![AWS](https://img.shields.io/badge/AWS-CloudTrail-orange)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Solidity](https://img.shields.io/badge/Solidity-Smart%20Contract-gray)
![Hardhat](https://img.shields.io/badge/Hardhat-Blockchain-yellow)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI-black)

---

### ⚡ Cloud Activity → Audit Event → Cryptographic Proof → Blockchain → Verification

Production-oriented cloud security architecture built using:

**☁️ AWS CloudTrail • 🔐 SHA-256 • 🗄️ MongoDB Atlas • ⛓️ Solidity • ⚛️ React • 🐳 Docker • 🤖 GitHub Actions**

</div>

---

# 🌟 Features

### ☁️ Cloud Security

- AWS CloudTrail event integration
- Cloud activity auditing
- Resource and action tracking
- Event severity classification
- Cloud resource monitoring

### 🔐 Security & Integrity

- SHA-256 cryptographic hashing
- JWT authentication
- Role-Based Access Control (RBAC)
- Tamper detection
- Cryptographic integrity verification

### ⛓️ Blockchain

- Solidity smart contract
- Hardhat development environment
- Ethereum-compatible blockchain
- On-chain integrity proof
- Blockchain hash verification

### 🗄️ Audit Storage

- MongoDB Atlas
- Complete audit record storage
- Event metadata tracking
- Verification status tracking
- Blockchain transaction tracking

### 🐳 DevOps & CI

- Docker containerization
- Docker Compose
- Nginx
- GitHub Actions CI
- Automated frontend build verification

---

# 🏗️ Architecture

```text
                         ☁️ AWS Cloud
                              │
                              ▼
                      AWS CloudTrail
                              │
                              ▼
                    Node.js + Express
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
              🔐 SHA-256            🔑 JWT + RBAC
                    │
              ┌─────┴─────┐
              ▼           ▼
         🗄️ MongoDB    ⛓️ Blockchain
              │           │
              └─────┬─────┘
                    ▼
             🔍 Hash Verification
                    │
                    ▼
             ⚛️ React Dashboard

# 🔥 Why This Project?

Traditional audit records can be modified after they are stored.

This project combines **cloud auditing, cryptographic hashing, database storage, and blockchain verification** to make cloud audit records tamper-evident.

It demonstrates:

- ☁️ Cloud Security Auditing
- 🔐 Cryptographic Integrity
- ⛓️ Blockchain Verification
- 🚨 Tamper Detection
- 🔑 Authentication & RBAC
- 🐳 Containerized Deployment
- 🤖 Continuous Integration

---

# 🧠 Audit Workflow

```text
Cloud Activity
      ↓
AWS CloudTrail Event
      ↓
Severity Classification
      ↓
SHA-256 Hash
      ↓
MongoDB + Blockchain
      ↓
Hash Verification
      ↓
┌──────────────────────────┐
│ Match    → ✅ VERIFIED   │
│ Mismatch → ⚠️ TAMPERED  │
└──────────────────────────┘

