import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./MainNavigator";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import NewAddressScreen from "../screens/NewAddressScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderDetailScreen from "../screens/OrderDetailScreen";
import CouponScreen from "../screens/CouponScreen";
import SuccessScreen from "../screens/SuccessScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const Stack = createStackNavigator();
const Tabs = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Game" component={MainNavigator} />
    <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
    <Stack.Screen name="NewAddress" component={NewAddressScreen} />
    <Stack.Screen name="Coupon" component={CouponScreen} />
    <Stack.Screen name="Success" component={SuccessScreen} />
    <Stack.Screen name="Order" component={OrderScreen} />
    <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
  </Stack.Navigator>
);

export default Tabs;
