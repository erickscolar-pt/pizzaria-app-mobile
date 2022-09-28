import axios from 'axios';

const api = axios.create({
   baseURL: 'https://backend-pizzariacoorado.herokuapp.com'
  //baseURL: 'http://192.168.15.7:3333'
})

export { api };