import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";

import connectDB from "./config/db.js";
import Event from "./models/Event.js";
import createEventHash from "./utils/hash.js";
import {
  recordOnChain,
  verifyOnChain
} from "./utils/blockchain.js";
import { fetchRecentEvents } from "./utils/cloudtrail.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Cloud Resource Audit API is running"
  });
});

// Create audit event
app.post("/api/events", async (req, res) => {
  try {
    const {
      user,
      action,
      resource,
      service,
      severity
    } = req.body;

    if (!user || !action || !resource || !service || !severity) {
      return res.status(400).json({
        message: "All event fields are required"
      });
    }

    const eventId = `EVT-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;

    const eventData = {
      user,
      action,
      resource,
      service,
      severity
    };

    // Generate SHA-256 hash
    const hash = createEventHash(eventData);

    // Record hash on blockchain
    const blockchainTx = await recordOnChain(eventId, hash);

    // Save complete event in MongoDB
    const event = await Event.create({
      eventId,
      user,
      action,
      resource,
      service,
      severity,
      hash,
      blockchainTx,
      status: "PENDING"
    });

    res.status(201).json(event);

  } catch (error) {
    console.error("Create event error:", error.message);

    res.status(500).json({
      message: "Failed to create audit event",
      error: error.message
    });
  }
});

// Get recent AWS CloudTrail events
app.get("/api/cloudtrail/events", async (req, res) => {
  try {
    const events = await fetchRecentEvents();

    res.json({
      count: events.length,
      events
    });

  } catch (error) {
    console.error("CloudTrail error:", error.message);

    res.status(500).json({
      message: "Failed to fetch CloudTrail events",
      error: error.message
    });
  }
});

// Import a CloudTrail CreateBucket event into the audit system
app.post("/api/cloudtrail/import", async (req, res) => {
  try {
    const events = await fetchRecentEvents("CreateBucket");

    // Find the most recent CreateBucket event
    const cloudTrailEvent = events.find(
      (event) => event.EventName === "CreateBucket"
    );

    if (!cloudTrailEvent) {
      return res.status(404).json({
        message: "No CreateBucket event found in recent CloudTrail events"
      });
    }

    const resource =
      cloudTrailEvent.Resources?.[0]?.ResourceName ||
      "Unknown resource";

    const eventId = `AWS-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;

    const eventData = {
      user: cloudTrailEvent.Username || "Unknown user",
      action: cloudTrailEvent.EventName,
      resource,
      service: cloudTrailEvent.EventSource || "AWS",
      severity: "LOW"
    };

    // Generate SHA-256 hash
    const hash = createEventHash(eventData);

    // Record hash on blockchain
    const blockchainTx = await recordOnChain(eventId, hash);

    // Save complete event in MongoDB
    const event = await Event.create({
      eventId,
      user: eventData.user,
      action: eventData.action,
      resource: eventData.resource,
      service: eventData.service,
      severity: eventData.severity,
      hash,
      blockchainTx,
      status: "PENDING"
    });

    res.status(201).json({
      message: "CloudTrail event imported successfully",
      source: "AWS CloudTrail",
      cloudTrailEvent,
      auditEvent: event
    });

  } catch (error) {
    console.error("CloudTrail import error:", error.message);

    res.status(500).json({
      message: "Failed to import CloudTrail event",
      error: error.message
    });
  }
});

// Get all events
app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find()
      .sort({ createdAt: -1 });

    res.json(events);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message
    });
  }
});

// Verify event
app.get("/api/events/:eventId/verify", async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findOne({ eventId });

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    const currentHash = createEventHash({
      user: event.user,
      action: event.action,
      resource: event.resource,
      service: event.service,
      severity: event.severity
    });

    const isValid = await verifyOnChain(
      eventId,
      currentHash
    );

    event.status = isValid ? "VERIFIED" : "TAMPERED";

    await event.save();

    res.json({
      eventId,
      currentHash,
      originalHash: event.hash,
      blockchainVerified: isValid,
      status: event.status
    });

  } catch (error) {
    console.error("Verification error:", error.message);

    res.status(500).json({
      message: "Verification failed",
      error: error.message
    });
  }
});

// Statistics
app.get("/api/stats", async (req, res) => {
  try {
    const total = await Event.countDocuments();

    const verified = await Event.countDocuments({
      status: "VERIFIED"
    });

    const tampered = await Event.countDocuments({
      status: "TAMPERED"
    });

    res.json({
      total,
      verified,
      tampered
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch statistics",
      error: error.message
    });
  }
});

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error.message);
  }
};

startServer();