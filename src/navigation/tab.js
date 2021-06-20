import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import AccountNavigator from './AccountNavigator'
import MainNavigator from './MainNavigator'

import NavButton from './NavButton'
import route from '../navigation/route'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    {console.log(route.RouteList)}
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: '#fff',
            activeTintColor:'#8C271E',
            inactiveBackgroundColor:'#fff',
            inactiveTintColor:'gray',
            showLabel:false
        }}
      >
          <Tab.Screen 
            name='Main'
            component={MainNavigator}
            options= {{
                // tabBarIcon: ({focused})=> <MaterialCommunityIcons name="silverware-fork-knife" size={24} color= { focused ?'#F3A712':"gray" } /> 
                tabBarIcon: ({size,color})=> <MaterialCommunityIcons name="silverware-fork-knife" size={size} color= {color}/> 
                      
            }}
        />
         <Tab.Screen 
            name='Cart'
            component={AccountNavigator}
            options= {
                ({navigation}) => ({

                  tabBarButton:()=> <NavButton onPress={()=> navigation.navigate(route.RouteList.Account)} />,

                  tabBarIcon: ({size,color})=> <MaterialCommunityIcons name="silverware-fork-knife" size={size} color= {color}/> 
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
export default Tabs