import axios from 'axios';

export const API_KEY = '704e0c5dab1a7ef0664d5d9d420226f3';

export const API_URL = 'https://api.themoviedb.org/3/';

export const movies = axios.create({ baseURL: API_URL });
const http = axios.create({ baseURL: 'https://rails-kyhn.onrender.com' });

export default http;
