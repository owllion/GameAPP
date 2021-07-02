
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

const addToFav = (data,token) => instance.post('/game/addToFav', data,{
    headers: {
        Authorization: token
    }
  })
const removeFromFav = (data,token) => instance.post('/user/delete/favlist', data,{
    headers: {
        Authorization: token
    }
  })
const updateQty = (data,token) => instance.post('/cart/product/updateQty', data,{
    headers: {
        Authorization: token
    }
  })
const applyCode = (data,token) => instance.post('/applycoupon', data,{
    headers: {
        Authorization: token
    }
  })
const createOrder = (data,token) =>instance.post('/game/create_order', data,{
    headers: {
        Authorization: token
    }
  })
const getOrderList = token => instance.get('/user/orderList',{
    headers: {
        Authorization: token
    }
  })
const getOrderDetail = (data,token) => instance.post('/order/detail',data,{
    headers: {
        Authorization: token
    }
  })
const getCouponList = token => instance.get('/user/couponList',{
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
    updateQty,
    applyCode,
    createOrder,
    getOrderList,
    getOrderDetail,
    getCouponList
}
 