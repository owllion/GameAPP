import { authActions } from '../slice/Auth'
import userApi from '../../api/user'
import {navigate} from '../../navigationRef'

interface Props {
    total_price:number,
    discount:number,
    discount_code:string,
    payment_method:string,
    delivery_address:string,
    order_item:{
                image: Array<string>;
                productName: string;
                price: number;
                category: string;
                description: string;
                productId: string;
                rating:number,
                qty:number,
                isChecked:boolean,
                stock:number
            }[]
}

export const createOrder = (payload:Props) => {
  
    return async(dispatch:any,getState:any) => {
       const state = getState().auth
       try {
           dispatch(authActions.setLoading({isLoading:true}))

          const {data:{user}} = await userApi.createOrder(payload,state.token)
          
          dispatch(authActions.setCouponList({couponList:user.couponList}))
          dispatch(authActions.setCart({cartList:user.cartList}))
          dispatch(authActions.setLoading({isLoading:false}))
          alert('成功')
          navigate('Order')
       }catch(e) {        
           if(e.response) {
              alert(e.response.data.msg)
           }        
           dispatch(authActions.setLoading({isLoading:false}))
       }
    }
}