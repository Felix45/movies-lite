import axios from 'axios';

const http = axios.create({ baseURL: 'https://rails-kyhn.onrender.com' });

export default http;
