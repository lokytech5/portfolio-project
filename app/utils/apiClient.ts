import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default apiClient;
