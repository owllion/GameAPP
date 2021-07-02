import React,{useState,useEffect} from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import BackBtn from '../components/BackBtn';
import Modal from '../components/Modal'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slice/Auth';
import { Icon } from 'react-native-elements'


const NewAddressScreen = ({navigation}:any) =>{
    const dispatch = useDispatch()

    const url ='https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json'

    const getLocation = async() => {
        try {
           dispatch(authActions.setLoading({isLoading:true}))
           const {data} = await axios.get(url)
           console.log(data)
           setLocationList(data)
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
     const [locationList,setLocationList]=useState<{name:string}[]>([])
     const [cityList,setCityList] = useState<string[]>([])
     const [districtList,setDistrictList] = useState<string[]>([])
   const [visibleCity, setVisibleCity] = useState<boolean>(false);
   const [visibleDis, setVisibleDis] = useState<boolean>(false);
   
   const [city,setCity] = useState<string>('')
   const setCityHandler = (city:string) => {
         setCity(city)
     }
   const [district,setDistrict] = useState<string>('')
   const setDistrictHandler = (district:string) => {
         setDistrict(district)
     }
   const [road,setRoad] = useState<string>('')
  
  useEffect(()=> {
      getLocation()    
  },[])

  useEffect(()=>{
     const districtList = locationList.find((location:object)=> location.name ===city)?.districts.map(i=>i.name)||[]

     //when city changes,get first district from list,and set it to useStates' district,then district field will change its value automatically. 
      const [dis] = districtList
      setDistrict(dis) 

      setDistrictList(districtList)
  },[city])

    return (
        <Container>
           <Modal           
            visible={visibleCity}
            data={cityList}
            setAddressHandler={setCityHandler}
            closeHandler={()=>setVisibleCity(false)} />
            <Modal           
             visible={visibleDis}
             data={districtList}
             setAddressHandler={setDistrictHandler}
             closeHandler={()=>setVisibleDis(false)} />
             <BtnBox>
         <BackBtn/>
            </BtnBox>
            <TextBox>
       <Text title margin>New Address</Text> 
            </TextBox>
           <SettingBox onPress={()=>setVisibleCity(true) }>
             <InnerTextBox>
             <Text>縣市</Text>
             <Text highlight regular>{city}</Text>
             </InnerTextBox>
            <Icon 
              name='chevron-right' 
              type='Entypo' 
              color={COLORS.white}
              size={25} />
           </SettingBox>
            <SettingBox onPress={()=>setVisibleDis(true) }>
             <InnerTextBox>
             <Text>鄉鎮市區</Text>
             <Text highlight regular>{district}</Text>
             </InnerTextBox>
            <Icon 
              name='chevron-right' 
              type='Entypo' 
              color={COLORS.white}
              size={25} />
           </SettingBox>
             <Text ml p pl>街道巷弄</Text>      
           <TextInput
           onChangeText={(a:string)=>setRoad(a)} 
           placeholder='詳細地址' 
           placeholderTextColor={COLORS.grey}
           />
           <Save 
            onPress={()=>{
             if(!city || !district || !road) {
               alert('Check your field pls!')
               return
              }  
              navigation.navigate('Checkout',{newCity:city,newDistrict:district,newRoad:road})
            }}
            android_ripple={{colors:COLORS.light}}>
             <Text>Save</Text>
           </Save>
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
  color:${({highlight}:{highlight:boolean})=> highlight?COLORS.orange:COLORS.white};
  margin-left:${({ml}:{ml:boolean})=>ml?'25px':0};
  padding:${({p}:{p:boolean})=>p?'8px':0};
  padding-left:${({pl}:{pl:boolean})=>pl?'15px':0};
`
const InnerTextBox = styled.View``
const BtnBox = styled.View`
  padding-left:10px;
`
const TextBox = styled.Text`
  padding-left:15px;
  margin-top:20px;
  margin-bottom:20px;
`
const SettingBox = styled.Pressable`
 padding:10px;
 border-bottom-width:1px;
 border-style:solid;
 border-bottom-color:${COLORS.light}
 flex-direction:row;
 margin-left:30px;
 justify-content:space-between;
 align-items:center
`
const TextInput = styled.TextInput`
  margin-left:30px;
  padding:10px;
  padding-left:12px;
  margin-top:-10px;
  margin-bottom:20px;
  border-bottom-width:1px;
  border-style:solid;
  border-bottom-color:${COLORS.light}
  color:${COLORS.orange}   
`
const Save = styled.Pressable`
 padding:10px;
 justify-content:center;
 align-items:center;
 background-color:${COLORS.orange};
 bottom:0;
 border-radius:6px;
 margin-right:25px;
 margin-top:70%;
 margin-left:25px;
`
export default NewAddressScreen
