import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: process.env.AUTH_TOKEN,
    "Content-Type": "application/json",
  },
});

export default instance;
