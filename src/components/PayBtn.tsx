import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import {createOrder} from '../store/actions/CreateOrderAction'
import { useDispatch,useSelector } from 'react-redux';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const schedulePushNotification = async() => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Notification! 📢",
      body: 'New Order! Check it out!',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

interface Props {
    newCity:string,
    newDistrict:string,
    newRoad:string,
    finalPrice:number,
    code:string,
    discount:number,
    cartList:{
        image: Array<string>;
        productName: string;
        price: number;
        category: string;
        description: string;
        productId: string;
        rating:number,
        qty:number,
        isChecked:boolean,
        stock:number
  }[],
  Address:()=>string
}
const PayBtn = ({newCity,newDistrict,newRoad,finalPrice,code,discount,cartList,Address}:Props)=> {

      const dispatch = useDispatch()
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
     <Pressable            
        android_ripple={{color:COLORS.orange}} 
        onPress={async()=>
        { 
            if( Address()==='No address') {
            alert('You miss something.')
            return 
        }
            dispatch(createOrder({
             payment_method:"Credit",
             total_price:finalPrice,
             delivery_address:Address(),
             discount,
             discount_code:code,
             order_item:cartList
          }))
          await schedulePushNotification()
        } 
        }>
        <Text>Create Order</Text>
    </Pressable>
  );
}


const Pressable = styled.Pressable`
  padding:10px;
  justify-content:center;
  align-items:center;
  background-color:${COLORS.orange};
  margin-top:20px;
  border-radius:8px;
`
const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:${({regular}:{regular:boolean})=>regular? 'IBMPlexSansRegular':'IBMPlexSansBold'};
  color:${({highlight}:{highlight:boolean})=> highlight?COLORS.orange:COLORS.white}
`
export default PayBtn