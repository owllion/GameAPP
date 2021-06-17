import React from 'react';


import { View,ScrollView,StyleSheet,ImageBackground} from 'react-native';

import {register} from '../store/actions/authAction'
import {authActions} from '../store/slice/Auth'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const image = { uri: "https://images.unsplash.com/photo-1598576887169-14a09393cb98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=618&q=80"} ;

const SignupScreen= () => {
  //const dispatch = useDispatch()

   
  // const clearError = () => {
  //    dispatch(authActions.setError({message:''}))
  // }
 
//  const userRegister = (email:string,password:string ,userName:string) => {
//   if(!userName ) {
//      dispatch(authActions.setError({message:'Please enter your name'}))
//       return 
//   }
//   if(!email) {
//      dispatch(authActions.setError({message:'Please enter your email'}))
//       return
//   }
//    if(!password) {
//      dispatch(authActions.setError({message:'Please enter your password'}))
//       return
//   }
//    dispatch(register({userName,email,password}))
//  }
 interface Root {
  auth:{
    errorMsg:string
  }
}
//  const err = useSelector((state:Root)=> state.auth.errorMsg)
  return (
   <ImageBackground source={image} style={styles.image}>
   <ScrollView >
    <View style={t(' py-5 flex-1 flex justify-center')}> 

     {/* 在導向另一個頁面時就執行 */}
       {/* <NavigationEvents   
      onWillFocus={()=> {
        clearError()
        console.log('註冊錯誤訊息')
        console.log(err)
      }}   
    /> */}
{/* 
      <AuthForm  onSubmit={userRegister} headerText='SIGN UP' nameInput='true' submitButtonText='Register' /> 
       <NavLink text='Already have an account? Sign in!'   routeName='Signin'/> */}

    </View>
    </ScrollView>
 </ImageBackground>
  )
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
 
});
SignupScreen.navigationOptions = () => {
  return {
    headerShown:false
  }
}

export default SignupScreen;
