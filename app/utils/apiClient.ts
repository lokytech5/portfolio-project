// utils/apiClient.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || 'your_api_token_here';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

export default apiClient;
