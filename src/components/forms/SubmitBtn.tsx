import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFormikContext } from 'formik'
import { useDispatch } from 'react-redux'
import { registerOrLogin } from '../../store/actions/authAction'

interface Props {
   text:string; 
}

const SubmitBtn = (props:Props) => {
   const dispatch = useDispatch()
    const { errors,values }  = useFormikContext()
   
    let isChecked:boolean;
  console.log(values)
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
   
    const { text } = props
    const [isLoaded] = useFonts({
      MarcellusRegular: require('../../assets/fonts/Marcellus-Regular.ttf'),
  });
     if (!isLoaded) {
        return <AppLoading />
       }
   
    return (
      <TouchableOpacity
          onPress={checkSubmit}
         >
          <Text>{text}</Text>     
        </TouchableOpacity>
    )
}

const Text = styled.Text`
   font-family:MarcellusRegular;
   font-size:18px;
   color:white;
   text-align:center;
`

const TouchableOpacity = styled.TouchableOpacity`
  background-color:rgba(0,0,0,.3) rgba(0,0,0,.5);
  padding:15px;
  border-radius:50px;
  margin: 0 10px 10px 10px; 
  
`
export default SubmitBtn