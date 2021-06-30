import { authActions } from '../slice/Auth'
import userApi from '../../api/user'

interface AddProps {
    productId:string
}


interface removeProps {
    productId:string,
    favlist: {
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

export const addToFav = (payload:AddProps) => {
  
    return async(dispatch:any,getState:any) => {
       const state = getState().auth
       console.log('132')
       try {
           dispatch(authActions.setLoading({isLoading:true}))
          const {data:{favList}} = await userApi.addToFav(payload,state.token)
          dispatch(authActions.setFavList({favList}))
          dispatch(authActions.setLoading({isLoading:false}))
       }catch(e) {
          dispatch(authActions.setLoading({isLoading:false}))
           if(e.response) {
               alert(e.response.data.msg)
           }
       }
    }
}

export const removeFromFav = (payload:removeProps) => {
    return async(dispatch:any,getState:any) => {
       const state = getState().auth
      
       try {
           dispatch(authActions.setLoading({isLoading:true}))
           const {data:{favList}} = await userApi.removeFromFav(payload,state.token)
           dispatch(authActions.setFavList({favList}))
           dispatch(authActions.setLoading({isLoading:false}))
       }catch(e) {
           dispatch(authActions.setLoading({isLoading:false}))
           if(e.response) {
               alert(e.response.data.msg)
           }
       }
    }
}