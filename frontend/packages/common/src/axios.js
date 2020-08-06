import axios from 'axios';

const instance = axios.create({
  baseURL: `http://www.contactmajor.com/api/`
});

export default instance;
