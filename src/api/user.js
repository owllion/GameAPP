
import instance from './axios'

const getAllGames = () => instance.get('/games/all')
const addToCart = (data,token) => instance.post('/game/addToCart',data,{
    headers: {
        Authorization: token
    }
  })
const addToFav = data => instance.post('/game/addToFav', data)
export default {
    getAllGames,
    addToCart,
    addToFav
}
 