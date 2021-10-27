import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://Tarefa_Backend.herokuapp.com'
})
 
export default api;
