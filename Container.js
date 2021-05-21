import React from 'react'
import { View, Text } from 'react-native'
import Login from './src/Screen/Auth/Login'
import SignUp from './src/Screen/Auth/SignUp'
import SignIn from './src/Screen/Auth/SignIn'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screen/Home/HomePage'
import BottomTab from './src/Component/BottomTab'
const Stack = createStackNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}      
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container