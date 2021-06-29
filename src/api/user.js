
import instance from './axios'

const getAllGames = () => instance.get('/games/all')
const addToCart = (data,token) => instance.post('/game/addToCart',data,{
    headers: {
        Authorization: token
    }
  })
const deleteItem = (data,token) => instance.post('/cart/delete',data,{
    headers: {
        Authorization: token
    }
  })

const addToFav = data => instance.post('/game/addToFav', data)
const removeFromFav = data => instance.delete('/game/removeFromFav', data,{
    headers: {
        Authorization: token
    }
  })
const updateQty = (data,token) => instance.post('/cart/product/updateQty', data,{
    headers: {
        Authorization: token
    }
  })
export default {
    getAllGames,
    addToCart,
    deleteItem,
    addToFav,
    removeFromFav,
    updateQty
}
 