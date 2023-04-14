import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:5050',
});

export default instance;
