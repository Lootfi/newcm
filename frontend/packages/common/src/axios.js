import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.contactmajor.com/api/`
});

export default instance;
