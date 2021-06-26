import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from './MainNavigator'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator();
const Tabs = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Game" component={MainNavigator} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default Tabs