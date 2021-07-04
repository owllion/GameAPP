import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFormikContext } from 'formik'
import { useDispatch } from 'react-redux'
import { registerOrLogin } from '../../store/actions/AuthAction'
import COLORS from '../../assets/color/colors';

interface Props {
   text:string; 
}

const SubmitBtn = (props:Props) => {
   const { text } = props
   const dispatch = useDispatch()
    const { errors,values }  = useFormikContext()
   
    let isChecked:boolean;
 
    if(errors.email) { 
       //one field gets error, others get error too.So only need to check one field.
       isChecked = false
    }else {
       isChecked = true
    }
    const checkSubmit = () => {
       if(!isChecked) {
          alert('Please check your field again!')
          return 
       }
       dispatch(
          registerOrLogin({
           email:values.email,
           password:values.password,
           userName:values.name
         })
      ) 
   }
    return (
      <Pressable
          android_ripple={{
             color:COLORS.light
          }}
          onPress={checkSubmit}
         >
          <Text>{text}</Text>     
        </Pressable>
    )
}

const Text = styled.Text`
   font-family:IBMPlexSansBold;
   font-size:18px;
   color:white;
   text-align:center;
`

const Pressable = styled.Pressable`
  background-color:rgba(0,0,0,.3) rgba(0,0,0,.5);
  padding:15px;
  border-radius:50px;
  margin: 0 10px 10px 10px; 
  
`
export default SubmitBtn