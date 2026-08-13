<div align="center">



\# 🔐 AWS Cloud Security Audit \& Blockchain Tamper Detection



\### ☁️ CloudTrail → SHA-256 → MongoDB → Blockchain → Verification



A cloud security auditing platform that captures AWS cloud activity, creates

cryptographic integrity proofs, detects record tampering, and displays

verification results through a React dashboard.



☁️ AWS CloudTrail • 🔐 SHA-256 • 🗄️ MongoDB Atlas • ⛓️ Blockchain • ⚛️ React • 🐳 Docker • 🤖 GitHub Actions



</div>



\---



\# 🌟 Features



\### ☁️ Cloud Security



\- AWS CloudTrail event integration

\- Cloud activity auditing

\- Resource and action tracking

\- Event severity classification



\### 🔐 Security \& Integrity



\- JWT Authentication

\- Role-Based Access Control (RBAC)

\- SHA-256 cryptographic hashing

\- Tamper detection

\- Blockchain-based verification



\### ⛓️ Blockchain



\- Solidity smart contract

\- Hardhat development environment

\- Ethereum-compatible blockchain

\- On-chain integrity proof



\### 🐳 DevOps



\- Dockerized frontend and backend

\- Docker Compose

\- Nginx

\- GitHub Actions CI



\---



\# 🏗️ Architecture



```text

AWS Cloud

&#x20;   ↓

AWS CloudTrail

&#x20;   ↓

Node.js + Express

&#x20;   ↓

SHA-256 Hash

&#x20;   ↓

&#x20;┌───────────────┐

&#x20;↓               ↓

MongoDB       Blockchain

&#x20;↓               ↓

&#x20;└───────┬───────┘

&#x20;        ↓

Hash Verification

&#x20;        ↓

React Dashboard



🔥 Why This Project?



Traditional audit records can be modified after storage.



This project combines cloud auditing, cryptographic hashing, and blockchain

to make audit records tamper-evident.



It demonstrates:



Cloud Security Auditing

Cryptographic Integrity

Blockchain Verification

Tamper Detection

JWT \& RBAC

Docker Containerization

Continuous Integration



🧠 Audit Workflow

Cloud Activity

&#x20;     ↓

AWS CloudTrail Event

&#x20;     ↓

Severity Classification

&#x20;     ↓

SHA-256 Hash

&#x20;     ↓

MongoDB + Blockchain

&#x20;     ↓

Hash Verification

&#x20;     ↓

&#x20;┌──────────────┐

&#x20;↓              ↓

MATCH        MISMATCH

&#x20;↓              ↓

✅ VERIFIED   ⚠️ TAMPERED





📊 Dashboard



The React dashboard provides:



Total Events

Verified Events

Tampered Events

User

Action

Resource

AWS Service

Severity

Verification Status



🗄️ Audit Storage



Complete audit records are stored in MongoDB Atlas while the blockchain stores

the cryptographic integrity proof.



MongoDB

Complete Audit Record

&#x20;       ↓

&#x20;    SHA-256

&#x20;       ↓

Blockchain

Integrity Proof



🚨 Tamper Detection



When an audit record is modified:



Original Record

&#x20;     ↓

Original Hash

&#x20;     ↓

Blockchain Proof

&#x20;     ↓

Record Modified

&#x20;     ↓

New Hash

&#x20;     ↓

Hash Comparison

&#x20;     ↓

⚠️ TAMPERED



🛠️ Technology Stack



| Layer         | Technology                    |

| ------------- | ----------------------------- |

| ☁️ Cloud      | AWS CloudTrail                |

| ⚛️ Frontend   | React                         |

| 🟢 Backend    | Node.js, Express              |

| 🗄️ Database  | MongoDB Atlas                 |

| ⛓️ Blockchain | Solidity, Hardhat, Ethers.js  |

| 🔐 Security   | SHA-256, JWT, RBAC            |

| 🐳 DevOps     | Docker, Docker Compose, Nginx |

| 🤖 CI         | GitHub Actions                |



📂 Project Structure



blockchain-cloud-audit/



├── .github/

│   └── workflows/

│       └── ci.yml



├── backend/

├── blockchain/

├── frontend/



├── docs/

│   └── screenshots/



├── docker-compose.yml

├── LICENSE

└── README.md



🚀 Quick Start

Clone Repository

git clone https://github.com/Navyamanda25/blockchain-cloud-audit.git



cd blockchain-cloud-audit



Run Backend

cd backend

npm install

npm start



Run Frontend

cd frontend

npm install

npm start



Run Blockchain

cd blockchain

npm install

npx hardhat node



Run With Docker



From the project root:

docker compose up --build



🔒 Security



Sensitive credentials are stored in environment variables and excluded from Git.



Never commit:

.env

AWS credentials

Private keys

JWT secrets

MongoDB passwords

API keys



📈 Learning Outcomes



This project provided hands-on experience with:



✅ AWS Cloud Security



✅ CloudTrail



✅ Blockchain \& Solidity



✅ SHA-256 Cryptography



✅ MongoDB Atlas



✅ Node.js \& Express



✅ React



✅ JWT \& RBAC



✅ Docker



✅ GitHub Actions





<div align="center">

👩‍💻 Author



Navya Lakshmi Manda



B.Tech — CSE - Cybersecurity and IoT including Blockchain Technology



☁️ Cloud Computing • 🔐 Cybersecurity • ⛓️ Blockchain • ⚛️ Full Stack Development



Built with ☁️ AWS + 🔐 SHA-256 + ⛓️ Blockchain + 🗄️ MongoDB + ⚛️ React + 🐳 Docker



</div> ```

