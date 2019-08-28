import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3322/"
});

export default api;
