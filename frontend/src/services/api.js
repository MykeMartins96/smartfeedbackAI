import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smartfeedback-backend-oficial.onrender.com/api',
});

export default api;