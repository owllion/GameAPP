import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import PostEditScreen from '../screens/PostEditScreen'

const Stack  =createStackNavigator()

const MainNavigator = () => (
     <Stack.Navigator > 
        <Stack.Screen name='Restaurant' component={Home}  />      
        <Stack.Screen name='Edit' component={PostEditScreen}  />      
    </Stack.Navigator>
)

export default MainNavigator
