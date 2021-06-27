import {createSlice,PayloadAction} from '@reduxjs/toolkit'
export interface Data {
    result:{
        token:string,
        user:{
            name:string,
            email:string,
            avatarRnDefault:string,
            favList:[],
            cartList:[],
            county:string,
            district:string,
            road:string
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
        email:'',
        avatarRnDefault:'',
        cartList:[],
        favList:[],
        county:'',
        district:'',
        road:'',
        errorMsg:''
    },
    reducers : {
       
      signup(state, { payload }:PayloadAction<Data>) {      
           state.token = payload.result.token
           state.name = payload.result.user.name
           state.email = payload.result.user.email
           state.avatarRnDefault = payload.result.user.avatarRnDefault
           state.cartList = payload.result.user.cartList
           state.favList = payload.result.user.favList
           state.county = payload.result.user.county
           state.district = payload.result.user.district
           state.road = payload.result.user.road
           
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
       },
       setErrorClear(state) {
           state.errorMsg = ''
       }
    }
        
})

export const authActions = authSlice.actions
export default authSlice