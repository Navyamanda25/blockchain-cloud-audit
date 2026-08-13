import React, { useEffect, useState } from "react";
import {
    getEvents,
    getStats,
    verifyEvent
} from "./api";
import "./App.css";

function App() {
    const [events, setEvents] = useState([]);
    const [stats, setStats] = useState({
        total: 0,
        verified: 0,
        tampered: 0
    });
    const [loading, setLoading] = useState(true);

    const loadDashboard = async () => {
        try {
            const [eventsResponse, statsResponse] = await Promise.all([
                getEvents(),
                getStats()
            ]);

            setEvents(eventsResponse.data);
            setStats(statsResponse.data);
        } catch (error) {
            console.error("Failed to load dashboard:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    const handleVerify = async (eventId) => {
        try {
            await verifyEvent(eventId);
            await loadDashboard();
        } catch (error) {
            console.error("Verification failed:", error);
            alert("Verification failed");
        }
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Cloud Resource Audit</h1>
                <p>Blockchain-Based Tamper Detection System</p>
            </header>

            <main className="container">

                <section className="stats">
                    <div className="card">
                        <h3>Total Events</h3>
                        <p>{stats.total}</p>
                    </div>

                    <div className="card verified">
                        <h3>Verified</h3>
                        <p>{stats.verified}</p>
                    </div>

                    <div className="card tampered">
                        <h3>Tampered</h3>
                        <p>{stats.tampered}</p>
                    </div>
                </section>

                <section className="events-section">
                    <h2>Audit Events</h2>

                    {loading ? (
                        <p>Loading events...</p>
                    ) : events.length === 0 ? (
                        <p>No audit events found.</p>
                    ) : (
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Event ID</th>
                                        <th>User</th>
                                        <th>Action</th>
                                        <th>Resource</th>
                                        <th>Service</th>
                                        <th>Severity</th>
                                        <th>Status</th>
                                        <th>Verify</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {events.map((event) => (
                                        <tr key={event.eventId}>
                                            <td>{event.eventId}</td>
                                            <td>{event.user}</td>
                                            <td>{event.action}</td>
                                            <td>{event.resource}</td>
                                            <td>{event.service}</td>
                                            <td>{event.severity}</td>

                                            <td>
                                                <span
                                                    className={`status ${event.status.toLowerCase()}`}
                                                >
                                                    {event.status}
                                                </span>
                                            </td>

                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleVerify(event.eventId)
                                                    }
                                                >
                                                    Verify
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

            </main>
        </div>
    );
}

export default App;