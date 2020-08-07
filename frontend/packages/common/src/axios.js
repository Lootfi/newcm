import axios from 'axios';

const instance = axios.create({
  baseURL: `https://dashboard.contactmajor.com/api/front/`
  // baseURL: 'http://127.0.0.1:8001/api/front/'
});

export default instance;
