import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import User from '../screens/User'

import {COLORS, icons} from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()

import { MaterialIcons } from '@expo/vector-icons';
const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
          showLabel:false
        }}
      >
          <Tab.Screen 
            name='Home'
            component={Home}
            options= {{
                tabBarIcon: ({focused})=> <MaterialCommunityIcons name="silverware-fork-knife" size={24} color= { focused ?'#F3A712':"gray" } /> 
                      
            }}
        />
       
         <Tab.Screen 
            name='User'
            component={User}
             options= {{
                tabBarIcon: ({focused})=> <MaterialIcons name="person" size={24} color= { focused ? '#F3A712':"gray" }  />
                      
            }}
           
        />
        </Tab.Navigator>
    )
}
export default Tabs