import {createSlice,PayloadAction} from '@reduxjs/toolkit'
export interface Data {
    result:{
        token:string,
        user:{
            name:string
        }
    }
}
export interface Error {
    message:string 
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token:'',
        name:'',     
        errorMsg:''
    },
    reducers : {
        //登入成功就儲存token和name
      signup(state, { payload }:PayloadAction<Data>) {      
           state.token = payload.result.token
           state.name = payload.result.user.name
           
        },
         signin(state, { payload }:PayloadAction<Data>) {
            state.token = payload.result.token
            state.name = payload.result.user.name             
        },
        signout(state) {
            state.token =''
        },
       setError(state,{payload}:PayloadAction<Error>) {
           state.errorMsg = payload.message
       }
    }
        
})

export const authActions = authSlice.actions
export default authSlice