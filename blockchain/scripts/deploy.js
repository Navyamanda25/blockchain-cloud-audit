import { network } from "hardhat";

const { ethers } = await network.connect();

const auditLog = await ethers.deployContract("AuditLog");

await auditLog.waitForDeployment();

console.log("AuditLog deployed to:", await auditLog.getAddress());