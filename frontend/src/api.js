import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const getEvents = () => API.get("/events");

export const getStats = () => API.get("/stats");

export const verifyEvent = (eventId) =>
    API.get(`/events/${eventId}/verify`);

export default API;