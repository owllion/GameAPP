import React from 'react'
import styled from 'styled-components/native'
import COLORS from '../assets/color/colors'
import { Overlay } from 'react-native-elements';

interface Props {
  visible:boolean,
  closeHandler:()=>void,
  setAddressHandler:(address:string)=>void,
  text:string
}


const Modal = ({visible,closeHandler,setAddressHandler,text}:Props) => {
    if(!visible) return null
    return (
        <>
      <Overlay 
     overlayStyle={{
         padding:30,
         margin:20,
         height:'35%',
         width:'80%',
         backgroundColor:'rgba(225,225,225,.8)'
     }}
      isVisible={visible} 
      onBackdropPress={closeHandler} 
      >
         <Text>{text}</Text>
             {/* <FlatList 
              style={{marginTop:'50%'}}
              data={cate}
              numColumns={numColumns}
              keyExtractor={(i)=>i.id.toString()}
              renderItem ={({item})=> {
                    return (
                          
                      )
        }}
      />  */}
         {/* <Input/>
         <CheckBtn 
       
         android_ripple={{color:COLORS.light}}>
           <Text white >Change</Text>
         </CheckBtn> */}
      </Overlay>
   </>
    )
}


const Text = styled.Text`
font-size:16px;
font-family:IBMPlexSansRegular;
color:${({white}:{white:boolean})=>white?COLORS.light:COLORS.dark}
`
const Input =styled.TextInput`
  font-family:IBMPlexSansRegular;
  padding-left:20px;
  padding:15px;
  border-radius:10px;
  margin-top:20px;
  background-color:${COLORS.white}
`

const CheckBtn = styled.Pressable`
  padding:10px;
  margin-top:35px;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  background-color:${COLORS.orange}
`
export default Modal
