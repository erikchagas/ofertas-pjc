import axios from 'axios';

const api = axios.create({
  baseURL: 'https://playground.barato.com.br/desafio-front/offers',
});

export default api;