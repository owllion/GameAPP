//import需要用到的slice
import authSlice, {authActions} from '../slice/Auth'
import axios from '../../api/axios'
import * as navigation from '../../navigationRef.js'


interface UserData {
   email:string;
   password:string;
   userName:string
}

export const registerOrLogin = (payload:UserData) => {
   let path:string;
   return async(dispatch:any,getState:any) => {
      console.log(getState())
       payload.userName ? path = 'register' : path = 'rnLogin'
       const handler = path === 'register' ? 'signup' : 'signin'
        try {
            console.log(payload)
          
             const { data } = await axios.post(`/${path}`,payload) 
             dispatch(authActions[handler](data))
            
        }catch(e) {
           if(e.response) {
              const msg = e.response.data.msg
              console.log(msg)
              let errMsg:string | undefined;

            //login error
            if(msg.includes('No')) {
                errMsg ='User does not exist'
            }
            if(msg.includes('Incorrect')) {
               errMsg = 'Wrong password'
            }

            //register error
            if(msg.includes('invalid')) {
               errMsg = 'email is invalid!'
            }
             if(msg.includes('duplicate') ) {
              errMsg = 'email already exists!'
             
           }

            if(msg.includes('shorter')) {
              errMsg = 'Password should be at least 7 words'            
           } 
                   
           dispatch(authActions.setError({message:errMsg}))
           console.log(errMsg)
           }
           
          
           
        }
       
   }
}