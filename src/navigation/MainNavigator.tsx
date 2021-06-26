import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../screens/Home";
import CartScreen from '../screens/CartScreen'
import AccountNavigator from './AccountNavigator'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import COLORS from "../assets/color/colors";
import NavButton from './NavButton'
import route from '../navigation/route'

import * as Notifications from "expo-notifications";


const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
        <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: '#fff',
            activeTintColor:COLORS.primary,
            inactiveBackgroundColor:'#fff',
            inactiveTintColor:'gray',
            showLabel:false
        }}
      >
          <Tab.Screen 
            name='Game'
            component={Home}
            options= {{
                tabBarIcon: ({size,color})=> <Entypo name="game-controller" size={size} color= {color}/> 
                      
            }}
        />
         <Tab.Screen 
            name='Cart'
            component={CartScreen}
            options= {
                ({navigation}) => ({
                  tabBarButton:()=> <NavButton onPress={()=> navigation.navigate(route.RouteList.Account)} />                
                })                           
            }
        />     
         <Tab.Screen 
            name='Account'
            component={AccountNavigator}
             options= {{
                tabBarIcon: ({size,color})=> <MaterialIcons name="person" size={size} color= {color}/>                     
            }}
           
        />
        </Tab.Navigator>
    )
}

export default MainNavigator;
