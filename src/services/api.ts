import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backend-matheus.herokuapp.com'
})
 
export default api;
