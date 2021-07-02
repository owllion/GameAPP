import { authActions } from '../slice/Auth'
import userApi from '../../api/user'
import { orderActions } from '../slice/OrderSlice'

interface Props {
   orderId:string
}

export const getOrderDetail = (payload:Props) => {
  
    return async(dispatch:any,getState:any) => {
       const state = getState().auth
       
       try {
           dispatch(authActions.setLoading({isLoading:true}))
           const {data:{order}} = await userApi.getOrderDetail(payload, state.token)
           dispatch(orderActions.setOrderDetail({orderDetail:order}))
           dispatch(authActions.setLoading({isLoading:false}))
       }catch(e) {
          dispatch(authActions.setLoading({isLoading:false}))
           if(e.response) {
               alert(e.response.data.msg)
           }
       }
    }
}