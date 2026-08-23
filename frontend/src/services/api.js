import axios from 'axios';

// Cria uma instância configurada do Axios apontando para a sua API Node.js (Porta 5000)
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;
