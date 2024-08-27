import axios from "axios";

const BASE_URL = "http://wmsapitest.vinsumaxpress.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    // 'Authorization': 'Bearer YOUR_API_TOKEN',
    "Content-Type": "application/json",
  },
});
