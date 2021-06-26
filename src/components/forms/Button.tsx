import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFormikContext } from "formik";

interface Props {
   text:string; 
   children:React.ReactNode;
   
}

const Button = (props:Props) => {
   const { handleSubmit } = useFormikContext()?? {};
   const { text } = props
    const [isLoaded] = useFonts({
      MarcellusRegular: require('../../assets/fonts/Marcellus-Regular.ttf'),
  });
     if (!isLoaded) {
        return <AppLoading />
       }
    
    return (
        <MyButton
        onPress={()=> {
            
        }} 
           
         >
          <Text>{text}</Text>     
        </MyButton>
    )
}

const Text = styled.Text`
   font-family:MarcellusRegular;
   font-size:18px;
   color:white;
   text-align:center;
`

const MyButton = styled.TouchableOpacity`
  background-color:${(props:{color:boolean})=> props.color? '#C83E4D' :'rgba(0,0,0,.3) rgba(0,0,0,.5)'};
  padding:15px;
  border-radius:50px;
  margin: 0 10px 10px 10px; 
  
`
export default Button