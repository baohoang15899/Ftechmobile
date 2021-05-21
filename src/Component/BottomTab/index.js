import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screen/Home/HomePage'
import Cart from '../../Screen/Cart/Cart'
import Notification from '../../Screen/Notification/Notification'
import Setting from '../../Screen/Setting/Setting'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
export default function index() {
    return (
            <Tab.Navigator tabBarOptions={{
                tabStyle:{
                    justifyContent:'center',
                },
            }} >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ()=>(  
              <Icon name="ios-home" color='#5c4918' size={25}/>  
          )}}/>
                <Tab.Screen name="Notification" component={Notification} options={{tabBarIcon:()=>
                <Icon name="notifications" color='#5c4918' size={25}/>  
                }}/>
                <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon:()=>
                <Icon name="cart" color='#5c4918' size={25}/>  }} />
                <Tab.Screen name="Setting" component={Setting} options={{tabBarIcon:()=><Icon name="settings" color='#5c4918' size={25}/>}} />
            </Tab.Navigator>
    )
}
