import React,{useState,useEffect} from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import BackBtn from '../components/BackBtn';
import Modal from '../components/Modal'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slice/Auth';
 

const NewAddressScreen = () =>{
    const dispatch = useDispatch()

    const url ='https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json'

    const getLocation = async() => {
        try {
           dispatch(authActions.setLoading({isLoading:true}))
           const {data} = await axios.get(url)
           console.log(data)
           const result = data.map(i=>i.name)
           setCityList(result)
          dispatch(authActions.setLoading({isLoading:false}))
        }catch(e) {
             dispatch(authActions.setLoading({isLoading:false}))
            if(e.response) {
            alert(e)
          }
        }
     }
     const [cityList,setCityList] = useState<string[]>([])
   const [visible, setVisible] = useState<boolean>(false);
   const [city,setCity] = useState<string>('桃園市')
   const setAddressHandler = (city:string) => {
         setCity(city)
     }
  useEffect(()=> {
      getLocation()
  },[])
    return (
        <Container>
            <Modal 
            text='City'
            visible={visible} 
            setAddressHandler={setAddressHandler}
            closeHandler={()=>setVisible(false)} />
             <BtnBox>
         <BackBtn/>
            </BtnBox>
            <TextBox>
       <Text title margin>New Address</Text> 
            </TextBox>
           <City>
             <Text>{cityList}</Text>
           </City>
        </Container>
    )
}
const Container = styled.View`
  flex:1;
  padding:10px;
  padding-top:40px;  
  background-color:${COLORS.primary}
`
const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:${({regular}:{regular:boolean})=>regular? 'IBMPlexSansRegular':'IBMPlexSansBold'};
  color:${({highlight}:{highlight:boolean})=> highlight?COLORS.orange:COLORS.white}
`
const BtnBox = styled.View`
  padding-left:10px;
`
const TextBox = styled.Text`
  padding-left:15px;
  margin-top:20px;
  margin-bottom:20px;
`
const City = styled.Pressable`
 padding:10px;
 background-color:rgba(225,225,225,.8)
`
export default NewAddressScreen
