import React from 'react';
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Fontisto'
import * as Yup from 'yup'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native'
import Button from '../components/Button'
import AppFormInput from '../components/AppFormInput'
import FormikWrapper from '../components/FormikWrapper'


interface Props {
    headerText:string;
    onSubmit:Function;
    submitButtonText:string;
    nameInput:string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(7).label('Password'),
  name:Yup.string().required().min(3).label('Name')
})

const AuthForm= ({headerText,onSubmit, submitButtonText,nameInput}:Props) => {
     const [isLoaded] = useFonts({
      MarcellusRegular: require('../assets/fonts/Marcellus-Regular.ttf'),
  });
       if (!isLoaded) {
        return <AppLoading />
       }

  return (
    <View> 
      <Text>{headerText}</Text>   
          <FormikWrapper
            initialValues= {{ email: '', password: '', name:''}}
            onSubmit= { values => console.log(values) }
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
         <Button
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
export default  AuthForm
