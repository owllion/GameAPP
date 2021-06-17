import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { View, Text } from 'react-native';
import t from 'tailwind-rn'
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';
import {authActions} from '../store/slice/Auth'

interface Props {
    headerText:string;
    onSubmit:Function;
    submitButtonText:string;
    nameInput:string
}

interface Root {
  auth:{
    errorMsg:string
  }
}
const AuthForm= ({headerText,onSubmit, submitButtonText,nameInput}:Props) => {

  const error = useSelector((state:Root)=> state.auth.errorMsg)

  const dispatch = useDispatch()

  const [email,setEmail] = useState<string>('')
  const [password,setPassword] =useState<string>('')
  const [name,setName]=useState<string>('')


  useEffect(()=> {
    dispatch(authActions.setError({message:''}))
  },[])
  const userName = name?name:null
  return (
    <View style={t('flex justify-center m-2 pt-10')}>
      <Text  style={t('text-white text-center font-bold text-4xl mb-5')}>{headerText}</Text>
   
         { nameInput==='true' && <Input
              textContentType='name'
              style={t('text-white pl-3')}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText= {setName}
              value={name}
              labelStyle={{color:'white'}}
              label='Name'
              leftIcon={
                  <Icon
                   name='user-secret'
                   color='#fff'
                  />
              } 
              /> }  
              {nameInput==='true' &&<Text style={t('-mt-5 pl-2 ')}>{error==='Please enter your name'? <Text style={t('text-red-500 font-bold')}>{error}</Text>:null}</Text>}
            
          <Input
              keyboardType='email-address'
              textContentType='emailAddress'
              style={t('text-white pl-3')}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText= {setEmail}
              value={email}
              labelStyle={{color:'white'}}
              label='Email'
              leftIcon={
                 <Icon
                   name='email'
                   color='#fff'
                  />
              }   
          />
          
          {/* register */}

           {error==='Please enter your email'? <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>:null}
           
           {error==='email is invalid!'? <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>:null}
            
           {error==='email already exists!'? <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>:null}

           {/* login */}
            {error==='User does not exist'&& <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>}
            <Input
              textContentType='password'
              style={t('text-white pl-3')}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText= {setPassword}
              value={password}
              labelStyle={{color:'white'}}
              label='Password'
              leftIcon={
                <Icon
                   name='locked'
                   color='#fff'
                  />
              }   
          />
           {error==='Please enter your password'? <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>:null}
          {error==='Password should be at least 7 words'&& <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>}
           {error==='Wrong password'&& <Text style={t('text-red-500 font-bold -mt-5 pb-2 pl-2')}>{error}</Text>}
     <Button
     onPress={()=> onSubmit(email,password,userName)}
      title={submitButtonText}
      icon={
        <Icon
          style={t('mr-2')}
            name="smiley"
            size={15}
            color="white"
          />
        }
          buttonStyle={{backgroundColor:'transparent',
            borderColor:'white',
            borderWidth:1,
            height:60,
            
          }}    
/>
      </View>

  )
};

export default  AuthForm
