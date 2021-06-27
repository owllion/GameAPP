import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/slice/Auth'
import styled from 'styled-components/native'
import AppConfigItem from '../components/AppConfigItem'

const user = [{
  name:'Celest',
  email:'bitlittlelie@gmail.com',
  avatar:'https://pyxis.nymag.com/v1/imgs/633/1d6/4d1f62480ba87681ebbfdeacf1cb4eb6a6-28-kidman.rsquare.w700.jpg',
  icon:'',
  targetScreen:''
}]

const config = [
  {
    set:'My Orders',
    icon:'mail',
    email:'',
    avatar:'',
    targetScreen:'Message' 
  },
  {
    set:'Log out',
    icon:'logout',
    email:'',
    avatar:'', 
     targetScreen:'Message' 
  }
]
const AccountScreen = ({navigation}:any) => {

  return (
     <>
      <AppConfigItem 
        data={user} 
        bgColor='#FED766'
        />
      <View>
      <AppConfigItem data={config} bgColor='#fff' />
      </View>
     </>
  )
};

const View= styled.View`
 margin-top:20px
`
export default AccountScreen;
