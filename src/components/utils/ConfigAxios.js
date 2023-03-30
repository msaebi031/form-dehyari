import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.LOCALHOST_URL,
  headers: {
    Authorization: process.env.AUTH_TOKEN,
    "Content-Type": "application/json",
  },
});

export default instance;
