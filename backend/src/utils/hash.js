import crypto from "crypto";

const createEventHash = (event) => {
    const data = JSON.stringify({
        user: event.user,
        action: event.action,
        resource: event.resource,
        service: event.service,
        severity: event.severity
    });

    return crypto
        .createHash("sha256")
        .update(data)
        .digest("hex");
};

export default createEventHash;