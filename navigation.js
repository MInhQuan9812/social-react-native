import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Reel from './screens/Reel';
import Notification from './screens/Notification';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabView = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: 50},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Reel') {
            iconName = focused ? 'videocam-sharp' : 'videocam-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'people-circle-sharp'
              : 'people-circle-outline';
          }
          return <Ionicons name={iconName} size={33} color="#000000" />;
        },
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Reel" component={Reel} />
      <BottomTab.Screen name="Notification" component={Notification} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabView" component={BottomTabView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTabView" component={BottomTabView} />
      <Stack.Screen name="Sign Up" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
);
