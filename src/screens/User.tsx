import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
//import { useDispatch } from 'react-redux'
import { authActions } from '../store/slice/Auth'


const AccountScreen = ({navigation}:any) => {

  // const dispatch = useDispatch()

  // const signout = () => {
  //     dispatch(authActions.signout())
  //     navigation.navigate('Signin')
  // }
  console.log('fff')
  return (
     <View>
       <Text>User</Text>
       
       <Text>User</Text>
       <Text>User</Text>
       <Text>User</Text>
     </View>
      // <View style={t('flex-1 p-10')}>
      //   <TouchableOpacity onPress={signout}>
      //    <Text style={t('font-bold')}>Sign out</Text>
      //   </TouchableOpacity>
      // </View>
  
  )
};

export default AccountScreen;
