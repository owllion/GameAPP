import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../screens/Home";
import CartScreen from '../screens/CartScreen'
import AccountNavigator from './AccountNavigator'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import COLORS from "../assets/color/colors";
import TabCenterBtn from './TabCenterBtn'
import route from '../navigation/route'
import { Badge } from "react-native-elements";
import * as Notifications from "expo-notifications";


const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
        <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: '#fff',
            activeTintColor:COLORS.orange,
            inactiveBackgroundColor:'#fff',
            inactiveTintColor:'gray',
            showLabel:false,
            tabStyle:{            
                backgroundColor:'transparent',             
            },
            style: {
                backgroundColor:COLORS.primary,
                borderTopWidth:0,
                borderRadius:50,
                height:60,
                position: 'absolute',
                left: 20,
                right: 20,
                bottom:20
             },
        }}
      >
          <Tab.Screen 
            name='Game'
            component={Home}
            options= {{
                tabBarIcon: ({size,color,focused})=> 
                <>
                <Entypo name="game-controller" size={size} color= {color}/> 
                { focused &&  
                    <Badge 
                      badgeStyle={   
                        {
                          backgroundColor:COLORS.orange, borderColor:COLORS.orange
                        }
                      }  
                    />
                }
                </>              
            }}
        />
         <Tab.Screen 
            name='Cart'
            component={CartScreen}
            options= {
                ({navigation}) => ({
                  tabBarButton:()=> <TabCenterBtn onPress={()=> navigation.navigate(route.RouteList.Cart)} />                
                })                           
            }
        />     
         <Tab.Screen 
            name='Account'
            component={AccountNavigator}
             options= {{

                tabBarIcon: ({size,color,focused})=>
                <>
                 <MaterialIcons name="person" size={size} color= {color}/>  
                  { focused &&  
                    <Badge 
                      badgeStyle={   
                        {
                          backgroundColor:COLORS.orange, borderColor:COLORS.orange
                        }
                      }  
                    />
                }
                </>                   
            }}
           
        />
        </Tab.Navigator>
    )
}

export default MainNavigator;
