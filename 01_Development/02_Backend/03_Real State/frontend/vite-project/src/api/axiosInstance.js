import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // change port if backend uses different
});

export default axiosInstance;
