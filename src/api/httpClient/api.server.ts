import axios from 'axios';

const apiServer = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default apiServer;
