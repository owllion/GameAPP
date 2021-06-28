import axios from 'axios'
import store from '../store/index'

const ap = () => console.log(store)
ap()
const auth = store.getState().auth
console.log(auth)
export default axios.create({
    baseURL: 'https://koza-server.herokuapp.com/api',
    
}) 
// headers: {
//      Authorization: token
//     }   