import React from 'react'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import {useDispatch,useSelector} from 'react-redux'
import { authActions } from '../store/slice/Auth';
import userApi from '../api/user'
import useApi from '../api/useApi';
const AddToCartBtn = ({gameId,qty}:{gameId:string,qty:number}) => {
    const token = useSelector(state=>state.auth.token)
    const cart = useSelector(state=>state.auth.cartList)
    console.log(token)
      const dispatch = useDispatch()

      const addToCartHandler = async() => {
        try {
           dispatch(authActions.setLoading({isLoading:true})) 

            const {data:{cartList}} = await userApi.addToCart({productId:gameId,qty},token)
           console.log(cartList)
            const length = cartList.length

            dispatch(authActions.setCart({cartList}))               
            console.log(cartList)
            dispatch(authActions.setCartLength({length}))  
            dispatch(authActions.setLoading({isLoading:false}))     
       }catch(e) {
           dispatch(authActions.setLoading({isLoading:false}))
          alert(e)
       }
    }

    return (
        <Pressable 
        onPress={addToCartHandler}
        android_ripple={{color:COLORS.light,borderless:true}}
        > 
          <Text style={{color:COLORS.white}}>Add To Cart</Text>   
        </Pressable>    
    )
}
const Pressable = styled.Pressable`
  height:50px;
  justify-content:center;
  align-items:center;
  background-color:${COLORS.primary};
  border-radius:10px;
  padding: 0 10px;
  margin-top:20px;
`

const Text = styled.Text`
  font-size:15px;
  color:${COLORS.white};
  font-family:IBMPlexSansBold
`
export default AddToCartBtn
