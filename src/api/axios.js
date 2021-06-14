import axios from 'axios'

export default axios.create({
    baseURL: 'https://koza-server.herokuapp.com/api'
}) 