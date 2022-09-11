import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};


export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
)

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Sign Up" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
);
