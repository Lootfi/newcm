import axios from 'axios';
const port = typeof window !== 'undefined' ? window.location.port : '';

const axiosinstance = axios.create({
  baseURL: `${
    !port ? 'https://dashboard.contactmajor.com' : 'http://127.0.0.1:8001'
  }/api/front/`,
  headers: {
    Authorization: `Bearer ${
      typeof window !== 'undefined' && localStorage.getItem('token')
    }`
  }
});

export default axiosinstance;
