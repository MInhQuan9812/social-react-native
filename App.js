
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import RootNavigation from './navigation'
import AuthNavigation from './AuthNavigation'

export default function App() {
  return (
    <AuthNavigation/>
  );
}


