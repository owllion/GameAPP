import { authActions } from '../slice/Auth'
import userApi from '../../api/user'

interface Props {
    productId:string,
    qty:number,
    cartList: {
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

export const updateQty = (payload:Props) => {
    return async(dispatch:any,getState:any) => {
       const state = getState().auth
       console.log(state.token)
       try {
           dispatch(authActions.setLoading({isLoading:true}))
          const {data:{cartList}} = await userApi.updateQty(payload,state.token)
          dispatch(authActions.setCart({cartList}))
          dispatch(authActions.setLoading({isLoading:false}))
       }catch(e) {
          dispatch(authActions.setLoading({isLoading:false}))
           if(e.response) {
               alert(e.response.data.msg)
           }
       }
    }
}