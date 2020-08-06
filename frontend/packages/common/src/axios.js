import axios from 'axios';

const instance = axios.create({
  baseURL: `http://${document.location.hostname}${
    document.location.port && ':8001'
  }/api/`
});

export default instance;
