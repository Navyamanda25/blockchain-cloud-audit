// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AuditLog {
    struct Event {
        string eventId;
        string dataHash;
        uint256 timestamp;
        address recordedBy;
    }

    mapping(string => Event) private events;
    string[] public eventIds;

    function recordEvent(
        string memory eventId,
        string memory dataHash
    ) public {
        require(
            bytes(events[eventId].eventId).length == 0,
            "Event already exists"
        );

        events[eventId] = Event(
            eventId,
            dataHash,
            block.timestamp,
            msg.sender
        );

        eventIds.push(eventId);
    }

    function getEvent(
        string memory eventId
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            address
        )
    {
        require(
            bytes(events[eventId].eventId).length != 0,
            "Event not found"
        );

        Event memory auditEvent = events[eventId];

        return (
            auditEvent.eventId,
            auditEvent.dataHash,
            auditEvent.timestamp,
            auditEvent.recordedBy
        );
    }

    function verifyEvent(
        string memory eventId,
        string memory currentHash
    ) public view returns (bool) {
        require(
            bytes(events[eventId].eventId).length != 0,
            "Event not found"
        );

        return (
            keccak256(bytes(events[eventId].dataHash)) ==
            keccak256(bytes(currentHash))
        );
    }

    function totalEvents() public view returns (uint256) {
        return eventIds.length;
    }
}