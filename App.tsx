
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './src/store/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import WelcomeScreen from './src/screens/WelcomeScreen'
import Detail from './src/screens/Detail'
import MessageScreen from './src/screens/MessageScreen'
import Tabs from './src/navigations/tab.js'
import AccountScreen from './src/screens/AccountScreen'
import PickerScreen from './src/screens/PickerScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'

const Stack = createStackNavigator();
let persistor = persistStore(store);


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}> 
    <NavigationContainer>
       <Stack.Navigator
       initialRouteName='RegisterScreen'
        screenOptions={{
       headerShown: false
     }}
     >
         
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='Home' component={Tabs} />
          <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='PickerScreen' component={PickerScreen} />
          <Stack.Screen name='MessageScreen' component={MessageScreen} />
          <Stack.Screen name='AccountScreen' component={AccountScreen} />
       </Stack.Navigator>
     </NavigationContainer>
     </PersistGate>
       </Provider> 
  );
}

export default App

