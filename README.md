<div align="center">



\# 🔐 AWS Cloud Security Audit \& Blockchain-Based Tamper Detection Platform



\### ☁️ AWS CloudTrail → SHA-256 → MongoDB → Blockchain → Verification → React Dashboard



A cloud security auditing platform that captures AWS CloudTrail activity, generates cryptographic integrity proofs, stores audit records in MongoDB, and verifies record integrity using blockchain.



<br>



!\[AWS](https://img.shields.io/badge/AWS-CloudTrail-orange)

!\[Node.js](https://img.shields.io/badge/Node.js-20-green)

!\[Express](https://img.shields.io/badge/Express.js-Backend-black)

!\[React](https://img.shields.io/badge/React-Frontend-blue)

!\[MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

!\[Solidity](https://img.shields.io/badge/Solidity-Smart%20Contract-gray)

!\[Hardhat](https://img.shields.io/badge/Hardhat-Blockchain-yellow)

!\[Docker](https://img.shields.io/badge/Docker-Containerized-blue)

!\[GitHub%20Actions](https://img.shields.io/badge/GitHub%20Actions-CI-black)



</div>



\---



\## 🚀 Project Overview



Traditional cloud audit records can be modified after they are stored.



This project provides a \*\*tamper-evident cloud auditing system\*\* by combining:



\*\*AWS CloudTrail + SHA-256 + MongoDB + Blockchain + React\*\*



The system captures cloud activity, generates a SHA-256 hash for the audit record, stores the complete record in MongoDB, and records its integrity proof on an Ethereum-compatible blockchain.



Later, the system can verify whether the MongoDB audit record has been modified.



\---



\# 🌟 Key Features



\### ☁️ Cloud Security



\- AWS CloudTrail event integration

\- Cloud activity auditing

\- Resource and action tracking



\### 🔐 Security



\- JWT authentication

\- Role-Based Access Control

\- SHA-256 cryptographic hashing

\- Tamper detection

\- Integrity verification



\### ⛓️ Blockchain



\- Solidity smart contract

\- Hardhat development environment

\- Blockchain transaction recording

\- Hash-based integrity verification



\### 📊 Monitoring Dashboard



\- Total audit events

\- Verified events

\- Tampered events

\- Event severity

\- Resource information

\- Verification status



\### 🐳 DevOps



\- Dockerized frontend

\- Dockerized backend

\- Docker Compose

\- Nginx

\- GitHub Actions CI



\---



\# 🏗️ System Architecture



```text

&#x20;                        AWS CLOUD

&#x20;                            │

&#x20;                            ▼

&#x20;                   ┌─────────────────┐

&#x20;                   │   AWS CloudTrail │

&#x20;                   └────────┬────────┘

&#x20;                            │

&#x20;                            ▼

&#x20;                 ┌─────────────────────┐

&#x20;                 │  Node.js + Express  │

&#x20;                 └──────────┬──────────┘

&#x20;                            │

&#x20;                   ┌────────┴────────┐

&#x20;                   │                 │

&#x20;                   ▼                 ▼

&#x20;             ┌───────────┐     ┌─────────────┐

&#x20;             │  SHA-256  │     │  JWT + RBAC │

&#x20;             │   Hash    │     │             │

&#x20;             └─────┬─────┘     └─────────────┘

&#x20;                   │

&#x20;             ┌─────┴─────────┐

&#x20;             │               │

&#x20;             ▼               ▼

&#x20;       ┌───────────┐   ┌──────────────┐

&#x20;       │  MongoDB  │   │  Blockchain  │

&#x20;       │   Atlas   │   │ Smart Contract│

&#x20;       └─────┬─────┘   └──────┬───────┘

&#x20;             │                │

&#x20;             └────────┬───────┘

&#x20;                      ▼

&#x20;             ┌──────────────────┐

&#x20;             │ Hash Verification│

&#x20;             └────────┬─────────┘

&#x20;                      │

&#x20;                      ▼

&#x20;             ┌──────────────────┐

&#x20;             │ React Dashboard  │

&#x20;             └──────────────────┘

```



\---



\# 🔄 How It Works



```text

Cloud Activity

&#x20;     ↓

AWS CloudTrail Event

&#x20;     ↓

Event Processing

&#x20;     ↓

Severity Classification

&#x20;     ↓

SHA-256 Hash Generation

&#x20;     ↓

┌──────────────────────────────┐

│                              │

▼                              ▼

MongoDB                    Blockchain

Audit Record               Integrity Proof

│                              │

└──────────────┬───────────────┘

&#x20;              ▼

&#x20;       Hash Verification

&#x20;              │

&#x20;       ┌──────┴──────┐

&#x20;       ▼             ▼

&#x20;  Hash Match     Hash Mismatch

&#x20;       │             │

&#x20;       ▼             ▼

&#x20;  ✅ VERIFIED    ⚠️ TAMPERED

```



\---



\# 🔐 Authentication \& RBAC



The backend uses \*\*JWT authentication\*\* and role-based authorization.



| Role | Access |

|---|---|

| \*\*Admin\*\* | Full audit management |

| \*\*Auditor\*\* | Create, import and verify audit events |

| \*\*Viewer\*\* | View events and statistics |



Protected API routes ensure that users can perform actions according to their assigned role.



\---



\# 🚨 Event Severity Classification



Audit events are classified into four severity levels:



```text

LOW

MEDIUM

HIGH

CRITICAL

```



Examples:



```text

CreateBucket → LOW

DeleteBucket → HIGH

CreateUser   → CRITICAL

```



Severity classification helps prioritize potentially sensitive cloud activity.



\---



\# 🔑 SHA-256 Integrity Protection



Each audit event is processed using \*\*SHA-256 cryptographic hashing\*\*.



```text

Audit Record

&#x20;    ↓

SHA-256

&#x20;    ↓

Unique Integrity Hash

```



The hash provides a cryptographic fingerprint of the audit record.



If the record is changed later, its newly calculated hash will differ from the original hash.



\---



\# ⛓️ Blockchain Integrity Verification



The Solidity `AuditLog` smart contract stores the integrity proof of the audit event.



The blockchain record contains:



\- Event ID

\- SHA-256 hash

\- Timestamp

\- Recording address



The complete audit record remains in MongoDB while the blockchain stores its cryptographic integrity proof.



```text

MongoDB

Complete Audit Record

&#x20;      │

&#x20;      │ SHA-256

&#x20;      ▼

Blockchain

Integrity Proof

```



\---



\# ⚠️ Tamper Detection



The system detects unauthorized changes to stored audit records.



```text

Original Audit Record

&#x20;       ↓

Original SHA-256 Hash

&#x20;       ↓

Blockchain Proof

&#x20;       ↓

MongoDB Record Modified

&#x20;       ↓

New SHA-256 Hash

&#x20;       ↓

Hash Comparison

&#x20;       ↓

Mismatch

&#x20;       ↓

⚠️ TAMPERED

```



\### Verified Record



!\[Verified Event](docs/screenshots/verified-event.png)



\### Tampered Record



!\[Tamper Detected](docs/screenshots/tamper-detected.png)



\---



\# ☁️ AWS CloudTrail Integration



AWS CloudTrail provides the cloud activity events used by the auditing system.



!\[AWS CloudTrail Event](docs/screenshots/AWS-cloudtrail-event.png)



The captured event contains information such as:



\- Event name

\- Event time

\- User

\- Event source

\- Resource information



\---



\# 🗄️ MongoDB Audit Storage



Complete audit records are stored in MongoDB Atlas.



!\[MongoDB Audit Event](docs/screenshots/mongodb-event.png)



Stored information includes:



\- Event ID

\- User

\- Action

\- Resource

\- Service

\- Severity

\- SHA-256 hash

\- Blockchain transaction

\- Verification status



\### Verified MongoDB Record



!\[MongoDB Verified Event](docs/screenshots/mongodb-event-verified.png)



\### Tampered MongoDB Record



!\[MongoDB Tampered Event](docs/screenshots/mongodb-event-tamper-detected.png)



\---



\# 📊 React Monitoring Dashboard



The React dashboard provides a centralized view of cloud audit activity.



!\[Cloud Resource Audit Dashboard](docs/screenshots/dashboard.png)



\### Dashboard provides:



\- Total Events

\- Verified Events

\- Tampered Events

\- Audit Events

\- User

\- Action

\- Resource

\- Service

\- Severity

\- Verification Status



\---



\# 🐳 Dockerized Application



The application is containerized using Docker and Docker Compose.



```text

&#x20;                 Docker Compose

&#x20;                      │

&#x20;             ┌────────┴────────┐

&#x20;             │                 │

&#x20;             ▼                 ▼

&#x20;      Frontend Container   Backend Container

&#x20;             │                 │

&#x20;           Nginx           Node.js + Express

&#x20;             │                 │

&#x20;         Port 3000          Port 5000

```



!\[Docker Containers](docs/screenshots/docker-containers.png)



Run the application using:



```bash

docker compose up --build

```



\---



\# 🤖 GitHub Actions CI



The project includes a GitHub Actions CI workflow.



```text

Push / Pull Request

&#x20;       ↓

Checkout Repository

&#x20;       ↓

Setup Node.js

&#x20;       ↓

Install Backend Dependencies

&#x20;       ↓

Install Frontend Dependencies

&#x20;       ↓

Build Frontend

&#x20;       ↓

✅ CI Success

```



!\[GitHub Actions CI](docs/screenshots/github-actions.png)



\---



\# 🛠️ Technology Stack



| Layer | Technology |

|---|---|

| Cloud | AWS CloudTrail |

| Frontend | React |

| Backend | Node.js, Express |

| Database | MongoDB Atlas |

| Blockchain | Solidity, Hardhat, Ethers.js |

| Security | SHA-256, JWT, RBAC |

| Web Server | Nginx |

| Containerization | Docker, Docker Compose |

| CI | GitHub Actions |



\---



\# 📂 Project Structure



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

│   ├── .dockerignore

│   └── package.json

│

├── blockchain/

│   ├── contracts/

│   │   └── AuditLog.sol

│   ├── scripts/

│   ├── hardhat.config.ts

│   └── package.json

│

├── frontend/

│   ├── src/

│   ├── public/

│   ├── Dockerfile

│   ├── .dockerignore

│   └── package.json

│

├── docs/

│   └── screenshots/

│

├── docker-compose.yml

├── LICENSE

└── README.md

```



\---



\# 🚀 Quick Start



\## 1. Clone Repository



```bash

git clone <your-github-repository-url>



cd blockchain-cloud-audit

```



\## 2. Backend



```bash

cd backend

npm install

npm start

```



Backend:



```text

http://localhost:5000

```



\## 3. Frontend



Open another terminal:



```bash

cd frontend

npm install

npm start

```



Frontend:



```text

http://localhost:3000

```



\## 4. Blockchain



```bash

cd blockchain

npm install

npx hardhat node

```



Deploy the contract:



```bash

npx hardhat run scripts/deploy.js --network localhost

```



\## 5. Docker



From the project root:



```bash

docker compose up --build

```



\---



\# 🔒 Security



Sensitive credentials are stored using environment variables and excluded from Git.



The project protects secrets using:



```text

.gitignore

.dockerignore

Environment Variables

```



Never commit:



```text

.env

AWS credentials

Private keys

JWT secrets

MongoDB passwords

API keys

```



\---



\# 🔮 Future Enhancements



\- AWS EventBridge + Lambda event-driven integration

\- Automated SNS security alerts

\- PDF/CSV audit reports

\- CloudWatch monitoring

\- Advanced security analytics

\- Automated security notifications



\---



\# 📈 Learning Outcomes



This project provided hands-on experience with:



```text

Cloud Security

AWS CloudTrail

Blockchain

Solidity

SHA-256

MongoDB

Node.js

Express

JWT

RBAC

React

Docker

GitHub Actions

```



\---



\# 👩‍💻 Author



<div align="center">



\### Navya Lakshmi Manda



\*\*B.Tech — Computer Science \& Engineering\*\*



Cloud Computing • Cybersecurity • Blockchain • Full Stack Development



</div>

