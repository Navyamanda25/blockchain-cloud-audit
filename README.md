<div align="center">



\# 🔐 AWS Cloud Security Audit \& Blockchain Tamper Detection



\### ☁️ CloudTrail → SHA-256 → MongoDB → Blockchain → Verification



A cloud security auditing platform that captures AWS cloud activity, generates

cryptographic integrity proofs, detects audit-record tampering, and displays

verification results through a React dashboard.



<br>



!\[AWS](https://img.shields.io/badge/AWS-CloudTrail-orange)

!\[Node.js](https://img.shields.io/badge/Node.js-20-green)

!\[Express](https://img.shields.io/badge/Express.js-Backend-black)

!\[React](https://img.shields.io/badge/React-Frontend-blue)

!\[MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

!\[Solidity](https://img.shields.io/badge/Solidity-Smart%20Contract-gray)

!\[Hardhat](https://img.shields.io/badge/Hardhat-Blockchain-yellow)

!\[Docker](https://img.shields.io/badge/Docker-Containerized-blue)

!\[GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI-black)



\---



\### ⚡ Cloud Activity → Audit Event → Cryptographic Proof → Blockchain → Verification



Production-oriented cloud security architecture built using:



☁️ AWS CloudTrail • 🔐 SHA-256 • 🗄️ MongoDB Atlas • ⛓️ Solidity • ⚛️ React • 🐳 Docker • 🤖 GitHub Actions



</div>



\---



\# 🌟 Features



\## ☁️ Cloud Security



\- AWS CloudTrail event integration

\- Cloud activity auditing

\- Resource and action tracking

\- Event severity classification

\- Cloud resource monitoring



\## 🔐 Security \& Integrity



\- SHA-256 cryptographic hashing

\- JWT authentication

\- Role-Based Access Control (RBAC)

\- Tamper detection

\- Cryptographic integrity verification



\## ⛓️ Blockchain



\- Solidity smart contract

\- Hardhat development environment

\- Ethereum-compatible blockchain

\- On-chain integrity proof

\- Blockchain hash verification



\## 🗄️ Audit Storage



\- MongoDB Atlas

\- Complete audit record storage

\- Event metadata tracking

\- Verification status tracking

\- Blockchain transaction tracking



\## 🐳 DevOps \& CI



\- Docker containerization

\- Docker Compose

\- Nginx

\- GitHub Actions CI

\- Automated frontend build verification



\---



\# 🏗️ Architecture



<div align="center">



```text

&#x20;                        ☁️ AWS Cloud

&#x20;                             │

&#x20;                             ▼

&#x20;                     AWS CloudTrail

&#x20;                             │

&#x20;                             ▼

&#x20;                   Node.js + Express

&#x20;                             │

&#x20;                   ┌─────────┴─────────┐

&#x20;                   │                   │

&#x20;                   ▼                   ▼

&#x20;             🔐 SHA-256            🔑 JWT + RBAC

&#x20;                   │

&#x20;             ┌─────┴─────┐

&#x20;             ▼           ▼

&#x20;        🗄️ MongoDB    ⛓️ Blockchain

&#x20;             │           │

&#x20;             └─────┬─────┘

&#x20;                   ▼

&#x20;            🔍 Hash Verification

&#x20;                   │

&#x20;                   ▼

&#x20;            ⚛️ React Dashboard

</div>

🔥 Why This Project?



Traditional audit records can be modified after they are stored.



This project combines cloud auditing, cryptographic hashing, database

storage, and blockchain verification to make cloud audit records

tamper-evident.



The project demonstrates:



☁️ Cloud Security Auditing

🔐 Cryptographic Integrity

⛓️ Blockchain Verification

🚨 Tamper Detection

🔑 Authentication \& RBAC

🐳 Containerized Deployment

🤖 Continuous Integration



🧠 Audit Workflow

<div align="center">

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

┌──────────────────────────┐

│ Match    → ✅ VERIFIED   │

│ Mismatch → ⚠️ TAMPERED  │

└──────────────────────────┘

</div>

📊 Dashboard



The React dashboard provides a centralized view of cloud audit activity.



Dashboard includes:

📌 Total Events

✅ Verified Events

⚠️ Tampered Events

👤 User

🔧 Action

☁️ Cloud Resource

🛠️ AWS Service

🚨 Severity

🔍 Verification Status

<div align="center">

</div>



AWS CloudTrail provides the source cloud activity events used by the

audit pipeline.



The system processes CloudTrail events and converts them into structured

audit records.



<div align="center">



</div>



🗄️ MongoDB Audit Records



Complete audit records are stored in MongoDB Atlas.



Each record contains information such as:



Event ID

User

Action

Resource

Service

Severity

SHA-256 hash

Blockchain transaction

Verification status

<div align="center">



</div>

🔐 Cryptographic Integrity



The system generates a SHA-256 hash from the audit record.



The complete audit information remains in MongoDB while the cryptographic

proof is recorded on the blockchain.



Complete Audit Record

&#x20;         ↓

&#x20;     SHA-256

&#x20;         ↓

&#x20;  Cryptographic Hash

&#x20;      ↙       ↘

&#x20;MongoDB     Blockchain



⛓️ Blockchain Verification



The blockchain stores the integrity proof of the audit event.



During verification, the system compares the current record hash with the

original blockchain proof.





Current Record

&#x20;     ↓

New SHA-256 Hash

&#x20;     ↓

Blockchain Hash

&#x20;     ↓

Hash Comparison

&#x20;     ↓

✅ VERIFIED / ⚠️ TAMPERED

<div align="center">



</div>



🚨 Tamper Detection



If an audit record is modified after its original cryptographic proof is

recorded, the newly generated hash will differ from the blockchain hash.

Original Audit Record

&#x20;       ↓

Original SHA-256 Hash

&#x20;       ↓

Blockchain Proof

&#x20;       ↓

Record Modified

&#x20;       ↓

New SHA-256 Hash

&#x20;       ↓

Hash Comparison

&#x20;       ↓

⚠️ TAMPERED

<div align="center">



</div>

🛡️ Event Severity



The system classifies cloud audit events based on their security impact.



LOW

MEDIUM

HIGH

CRITICAL

Example:

CreateBucket → LOW

CreateUser   → CRITICAL





🔑 Authentication \& RBAC



The platform uses JWT-based authentication and role-based authorization.

| Role        | Access                                 |

| ----------- | -------------------------------------- |

| 👑 Admin    | Full audit management                  |

| 🛡️ Auditor | Create, import and verify audit events |

| 👁️ Viewer  | View events and statistics             |



Protected API routes enforce access based on the user's role.



🐳 Docker



The application is containerized using Docker and Docker Compose.

&#x20;                Docker Compose

&#x20;                      │

&#x20;         ┌────────────┴────────────┐

&#x20;         │                         │

&#x20;         ▼                         ▼

&#x20;    ⚛️ Frontend                🟢 Backend

&#x20;      Nginx                  Node.js + Express

&#x20;     Port 3000                  Port 5000



<div align="center">



</div>



Run the complete application:

docker compose up --build



🤖 GitHub Actions CI



GitHub Actions automatically validates the application build.

Push Code

&#x20;   ↓

Checkout Repository

&#x20;   ↓

Setup Node.js

&#x20;   ↓

Install Dependencies

&#x20;   ↓

Build Frontend

&#x20;   ↓

✅ CI Success



<div align="center">



</div>



🛠️ Technology Stack

| Layer         | Technologies                  |

| ------------- | ----------------------------- |

| ☁️ Cloud      | AWS CloudTrail                |

| ⚛️ Frontend   | React, Axios, Recharts        |

| 🟢 Backend    | Node.js, Express              |

| 🗄️ Database  | MongoDB Atlas                 |

| ⛓️ Blockchain | Solidity, Hardhat, Ethers.js  |

| 🔐 Security   | SHA-256, JWT, RBAC            |

| 🐳 DevOps     | Docker, Docker Compose, Nginx |

| 🤖 CI/CD      | GitHub Actions                |



📂 Project Structure

blockchain-cloud-audit/

│

├── .github/

│   └── workflows/

│       └── ci.yml

│

├── backend/

│   ├── src/

│   ├── Dockerfile

│   └── package.json

│

├── blockchain/

│   ├── contracts/

│   ├── scripts/

│   └── hardhat.config.ts

│

├── frontend/

│   ├── src/

│   ├── public/

│   ├── Dockerfile

│   └── package.json

│

├── docs/

│   └── screenshots/

│

├── docker-compose.yml

├── LICENSE

└── README.md



🚀 Quick Start

📥 Clone Repository

git clone https://github.com/Navyamanda25/blockchain-cloud-audit.git



cd blockchain-cloud-audit

🟢 Backend

cd backend



npm install



npm start

Backend:



http://localhost:5000



⚛️ Frontend

cd frontend



npm install



npm start

Frontend:



http://localhost:3000



⛓️ Blockchain

cd blockchain



npm install



npx hardhat node



Deploy the smart contract:



npx hardhat run scripts/deploy.js --network localhost



🐳 Docker



From the project root:

docker compose up --build



🔒 Security



Sensitive credentials are stored using environment variables and excluded

from Git.



🚫 Never commit:

.env

AWS credentials

Private keys

JWT secrets

MongoDB passwords

API keys



📈 Learning Outcomes



This project provided hands-on experience with:



☁️ AWS Cloud Security

🔎 AWS CloudTrail

🔐 SHA-256 Cryptography

⛓️ Blockchain \& Solidity

🗄️ MongoDB Atlas

🟢 Node.js \& Express

⚛️ React

🔑 JWT \& RBAC

🐳 Docker

🤖 GitHub Actions



👩‍💻 Author

<div align="center">

Navya Lakshmi Manda



B.Tech — Computer Science \& Engineering



☁️ Cloud Computing • 🔐 Cybersecurity • ⛓️ Blockchain • ⚛️ Full Stack Development



</div>

<div align="center">

🔐 Built with AWS + Blockchain + Cryptography + MongoDB + React + Docker



⭐ If you find this project useful, consider giving it a star!



</div> ```



