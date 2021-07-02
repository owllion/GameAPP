import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface DisProps {
    finalPrice:number,
    discount:number
}

interface DetailProps {

}

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        finalPrice:0,
        discount:'',
        detail:{}
    },
    reducers : {
       setDisAndPrice(state, { payload }:PayloadAction<DisProps>) {
           state.finalPrice = payload.finalPrice 
           state.discount = payload.discount 
      },
      clearDisAndPrice(state) {
           state.finalPrice = 0 
           state.discount = ''
      },
      setOrderDetail(state,{ payload }:PayloadAction<DetailProps>) {
          console.log(payload.orderDetail)
          state.detail = payload.orderDetail
      }
    }
        
})

export const orderActions = orderSlice.actions
export default orderSlice