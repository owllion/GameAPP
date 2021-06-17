
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import WelcomeScreen from './src/screens/WelcomeScreen'
import Detail from './src/screens/Detail'
import MessageScreen from './src/screens/MessageScreen'
import Tabs from './src/navigations/tab.js'
import AccountScreen from './src/screens/AccountScreen'
import PickerScreen from './src/screens/PickerScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
       initialRouteName='PickerScreen'
        screenOptions={{
       headerShown: false
     }}
     >
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='Home' component={Tabs} />
          <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='PickerScreen' component={PickerScreen} />
          <Stack.Screen name='MessageScreen' component={MessageScreen} />
          <Stack.Screen name='AccountScreen' component={AccountScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
