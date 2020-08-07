import axios from 'axios';

const instance = axios.create({
  baseURL: `https://dashboard.contactmajor.com/api/`
});

export default instance;
