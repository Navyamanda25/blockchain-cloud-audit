import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        eventId: {
            type: String,
            required: true,
            unique: true
        },

        user: {
            type: String,
            required: true
        },

        action: {
            type: String,
            required: true
        },

        resource: {
            type: String,
            required: true
        },

        service: {
            type: String,
            required: true
        },

        severity: {
            type: String,
            required: true
        },

        hash: {
            type: String,
            required: true
        },

        blockchainTx: {
            type: String,
            default: null
        },

        status: {
            type: String,
            enum: ["PENDING", "VERIFIED", "TAMPERED"],
            default: "PENDING"
        }
    },
    {
        timestamps: true
    }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;