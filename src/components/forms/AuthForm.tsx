import React from 'react';
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Fontisto'
import * as Yup from 'yup'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native'
import { useSelector}  from 'react-redux'
import SubmitBtn from './SubmitBtn'
import AppFormInput from '../AppFormInput'
import FormikWrapper from './FormikWrapper'
import ErrorMsg from '../forms/ErrorMsg'

interface Props {
    headerText:string;
    submitButtonText:string;
    nameInput:string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(7).label('Password'),
  name:Yup.string().required().min(3).label('Name')
})

const AuthForm= ({ headerText, submitButtonText,nameInput }:Props) => {

     const errorMsg = useSelector(state=> state.auth.errorMsg)

    // 解構的email和password就是initialValues
  //    const handleSubmit = ({ email, password }:{email:string,password:string}) => {
  //       dispatch(registerOrLogin({email,password})) 
  // };
  // console.log(handleSubmit)

     const [isLoaded] = useFonts({
      MarcellusRegular: require('../../assets/fonts/Marcellus-Regular.ttf'),
      IBMPlexSansBold: require('../../assets/fonts/IBMPlexSans-Bold.ttf'),
  });
       if (!isLoaded) {
        return <AppLoading />
       }

  return (
    <View> 
      <Text>{headerText}</Text>   
          <FormikWrapper
            initialValues= {{ email: '', password: '',name:''}}
            onSubmit= {()=>console.log('FORM的ONSUBMIT')}
            validationSchema={ validationSchema }
          >
            
             { nameInput==='true' && 
            
               <AppFormInput
                  fieldName='name'
                  textContentType='name'
                  style={{ color:'#fff',paddingLeft:20}}
                  autoCapitalize='none'
                  autoCorrect={false}
                  labelStyle={{color:'white'}}
                  label='Name'
                  leftIcon={
                    <Icon
                      name='user-secret'
                      color='#fff'
                    />
                  } 
                />  
               
             
            } 
          <AppFormInput
              fieldName='email'
              keyboardType='email-address'
              textContentType='emailAddress'
              style={{color:'#fff',paddingLeft:5}}
              autoCapitalize='none'
              autoCorrect={false}
              labelStyle={{color:'#fff'}}
              label='Email'
              leftIcon={
                 <Icon
                   name='email'
                   color='#fff'
                  />
              }   
          />
         
             { errorMsg==='email already exists!' && 
                  <ErrorMsg 
                  error={errorMsg}
                  visible='show' 
                />  

              }
              { errorMsg==='User does not exist' && 
                  <ErrorMsg 
                  error={errorMsg}
                  visible='show' 
                />  
              }
             
            <AppFormInput
              fieldName='password'
              textContentType='password'
              style={{color:'#fff',paddingLeft:3}}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect= {false}
              labelStyle={{
                color:'#fff'
              }}
              label='Password'
              leftIcon={
                <Icon
                   name='locked'
                   color='#fff'
                  />
              }   
          />
          { errorMsg==='Wrong password' && 
                  <ErrorMsg 
                  error={errorMsg}
                  visible='show' 
                />  
              }
         <SubmitBtn
          text={ submitButtonText }    
         />
     </FormikWrapper>       
    </View>
  )
};

const View = styled.View`
  justify-content:center;
  padding:10px;
  margin:10px
`

const Text = styled.Text`
    color:#fff;
    text-align:center;
    font-size:45px;
    margin-bottom:10px;
    font-family:MarcellusRegular;
`
const Wrapper =styled.View``
export default  AuthForm
