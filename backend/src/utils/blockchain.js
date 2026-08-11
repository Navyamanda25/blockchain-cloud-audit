import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const provider = new ethers.JsonRpcProvider(
    process.env.BLOCKCHAIN_RPC_URL
);

const wallet = new ethers.Wallet(
    process.env.BLOCKCHAIN_PRIVATE_KEY,
    provider
);

const auditLogAbi = [
    "function recordEvent(string eventId, string dataHash) public",
    "function getEvent(string eventId) public view returns (string, string, uint256, address)",
    "function verifyEvent(string eventId, string currentHash) public view returns (bool)",
    "function totalEvents() public view returns (uint256)"
];

const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    auditLogAbi,
    wallet
);

export const recordOnChain = async (eventId, dataHash) => {
    const tx = await contract.recordEvent(eventId, dataHash);

    await tx.wait();

    return tx.hash;
};

export const verifyOnChain = async (eventId, currentHash) => {
    return await contract.verifyEvent(eventId, currentHash);
};