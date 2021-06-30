import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from './MainNavigator'
import DetailScreen from '../screens/DetailScreen'
import CartScreen from '../screens/CartScreen'
import CheckoutScreen from '../screens/CheckoutScreen';
import NewAddressScreen from '../screens/NewAddressScreen';

const Stack = createStackNavigator();
const Tabs = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Game" component={MainNavigator} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
    <Stack.Screen name="NewAddress" component={NewAddressScreen} />
  </Stack.Navigator>
);

export default Tabs