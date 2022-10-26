import { authActions } from '../slice/Auth'
import { orderActions } from '../slice/OrderSlice'
import userApi from '../../api/user'

interface Props {
    totalPrice:number,
    code:string
}

export const applyCode = (payload:Props) => {
  
    return async(dispatch:any,getState:any) => {
       const state = getState().auth
       try {
           dispatch(authActions.setLoading({isLoading:true}))

          const {data:{result:{final,discount}}} = await userApi.applyCode(payload,state.token)
          console.log(final,discount)

          dispatch(orderActions.setDisAndPrice({finalPrice:final,discount}))
          dispatch(authActions.setErrorClear())
          dispatch(authActions.setLoading({isLoading:false}))
       }catch(e) {
          
           if(e.response) {
               dispatch(authActions.setError({message:e.response.data.msg}))
           }
           dispatch(orderActions.clearDisAndPrice())
           dispatch(authActions.setLoading({isLoading:false}))
       }
    }
}