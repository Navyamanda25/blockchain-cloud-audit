\# 🔐 Blockchain-Based Cloud Resource Audit \& Tamper Detection System



\### ☁️ Cloud Activity → SHA-256 → Blockchain → Verification → Dashboard



A cloud security auditing platform that integrates \*\*AWS CloudTrail, MongoDB, SHA-256 hashing, Ethereum-compatible blockchain, JWT authentication, RBAC, React, Docker, and GitHub Actions\*\* to provide tamper-evident cloud audit records.



\---



\## 🌟 Key Features



\- ☁️ AWS CloudTrail auditing

\- 🔐 JWT Authentication \& Role-Based Access Control

\- 🚨 Event Severity Classification

\- 🔑 SHA-256 Cryptographic Hashing

\- ⛓️ Blockchain Integrity Verification

\- 🗄️ MongoDB Audit Storage

\- ⚠️ Tamper Detection

\- 📊 React Monitoring Dashboard

\- 🐳 Docker \& Docker Compose

\- 🤖 GitHub Actions CI



\---



\## 🏗️ Architecture



```text

&#x20;                   AWS Cloud

&#x20;                       │

&#x20;                       ▼

&#x20;               AWS CloudTrail

&#x20;                       │

&#x20;                       ▼

&#x20;             Node.js + Express

&#x20;                       │

&#x20;            ┌──────────┴──────────┐

&#x20;            │                     │

&#x20;            ▼                     ▼

&#x20;       SHA-256 Hash           JWT + RBAC

&#x20;            │

&#x20;      ┌─────┴─────┐

&#x20;      ▼           ▼

&#x20;  MongoDB      Blockchain

&#x20;      │           │

&#x20;      └─────┬─────┘

&#x20;            ▼

&#x20;      Hash Verification

&#x20;            │

&#x20;            ▼

&#x20;      React Dashboard

```



\---



\## 🔄 How It Works



```text

Cloud Activity

&#x20;     ↓

CloudTrail Event

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

```



\---



\## 🔐 Authentication \& RBAC



| Role | Access |

|---|---|

| Admin | Full audit management |

| Auditor | Create, import and verify audit events |

| Viewer | View events and statistics |



Authentication is implemented using \*\*JWT\*\*, with protected API routes based on user roles.



\---



\## 🚨 Severity Classification



The system automatically classifies audit events into:



```text

LOW

MEDIUM

HIGH

CRITICAL

```



Examples:



```text

CreateBucket → LOW

CreateUser   → CRITICAL

```



\---



\## ⛓️ Blockchain Integrity



The Solidity `AuditLog` smart contract records:



\- Event ID

\- SHA-256 hash

\- Timestamp

\- Recording address



The complete audit record is stored in \*\*MongoDB\*\*, while its cryptographic integrity proof is stored on the \*\*blockchain\*\*.



\---



\## ☁️ AWS CloudTrail



AWS CloudTrail captures cloud activity and provides the source events used by the audit system.



!\[AWS CloudTrail Event](docs/screenshots/AWS-cloudtrail-event.png)



\---



\## 🗄️ Audit Record Storage



Complete audit records are stored in MongoDB with information such as:



\- User

\- Action

\- Resource

\- Service

\- Severity

\- SHA-256 hash

\- Blockchain transaction

\- Verification status



!\[MongoDB Audit Record](docs/screenshots/mongodb-event.png)



\---



\## 📊 Dashboard



The React dashboard provides:



\- Total events

\- Verified events

\- Tampered events

\- Event severity

\- Audit records

\- Verification status



!\[Cloud Resource Audit Dashboard](docs/screenshots/dashboard.png)



\---



\## ✅ Blockchain Verification



The system recomputes the SHA-256 hash of an audit record and compares it with the integrity proof stored on the blockchain.



A matching hash produces:



```text

blockchainVerified: true

status: VERIFIED

```



!\[Verified Event](docs/screenshots/verified-event.png)



\---



\## ⚠️ Tamper Detection



If an audit record is modified after its original hash has been recorded on the blockchain, the newly generated hash will not match the blockchain proof.



```text

Original Record

&#x20;     ↓

MongoDB Record Modified

&#x20;     ↓

New SHA-256 Hash

&#x20;     ↓

Blockchain Hash Comparison

&#x20;     ↓

⚠️ TAMPERED

```



!\[Tamper Detection](docs/screenshots/tamper-detected.png)



\---



\## 🐳 Docker



The application is containerized using Docker and Docker Compose.



```text

Frontend → Nginx → Port 3000

Backend  → Node.js → Port 5000

```



!\[Docker Containers](docs/screenshots/docker-containers.png)



Run the complete application with:



```bash

docker compose up --build

```



\---



\## 🤖 GitHub Actions CI



GitHub Actions automatically:



```text

Checkout Code

&#x20;     ↓

Setup Node.js 20

&#x20;     ↓

Install Backend Dependencies

&#x20;     ↓

Install Frontend Dependencies

&#x20;     ↓

Build Frontend

&#x20;     ↓

CI Success

```



!\[GitHub Actions CI](docs/screenshots/github-actions.png)



\---



\## 🛠️ Technology Stack



| Category | Technologies |

|---|---|

| Frontend | React, Axios, Recharts |

| Backend | Node.js, Express |

| Database | MongoDB Atlas |

| Cloud | AWS CloudTrail |

| Blockchain | Solidity, Hardhat, Ethers.js |

| Security | SHA-256, JWT, RBAC |

| DevOps | Docker, Docker Compose, Nginx |

| CI/CD | GitHub Actions |



\---



\## 📂 Project Structure



```text

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

└── README.md

```



\---



\## 🚀 Quick Start



\### 1. Backend



```bash

cd backend

npm install

npm start

```



Backend:



```text

http://localhost:5000

```



\### 2. Frontend



```bash

cd frontend

npm install

npm start

```



Frontend:



```text

http://localhost:3000

```



\### 3. Blockchain



```bash

cd blockchain

npm install

npx hardhat node

```



Deploy the smart contract:



```bash

npx hardhat run scripts/deploy.js --network localhost

```



\### 4. Docker



From the project root:



```bash

docker compose up --build

```



\---



\## 🔒 Security



Sensitive credentials are stored in environment variables and excluded from Git using `.gitignore` and Docker `.dockerignore`.



Never commit:



```text

.env

AWS credentials

Private keys

JWT secrets

Database passwords

API keys

```



\---



\## 🔮 Future Enhancements



\- AWS EventBridge + Lambda integration

\- Automated SNS security alerts

\- PDF/CSV audit reports

\- CloudWatch monitoring

\- Advanced security analytics



\---



\## 📈 Learning Outcomes



This project provided hands-on experience with:



\*\*Cloud Security • AWS CloudTrail • Blockchain • Solidity • SHA-256 • MongoDB • Node.js • Express • JWT • RBAC • React • Docker • GitHub Actions\*\*



\---



\## 👩‍💻 Author



\*\*Navya Lakshmi Manda\*\*



B.Tech — CSE - Cybersecurity and IoT including Blockchain Technology



\*\*Cloud Computing • Cybersecurity • Blockchain • Full Stack Development\*\*

