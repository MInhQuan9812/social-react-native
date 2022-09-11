import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {SignedInStack, SignedOutStack} from './navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

export default function AuthNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const hasTokenLoggedIn = token =>
    token ? setIsLoggedIn(token) : setIsLoggedIn(null);

  const retrievedToken = async () => {
    try {
      await AsyncStorage.getItem('Instagram-AuthToken', (err, result) => {
        hasTokenLoggedIn(result);
      });
    } catch (error) {
      console.log('Loi ngay day: ' + error.message);
      throw error;
    }
  };

  useEffect(() => {
    retrievedToken();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? <SignedInStack /> : <SignedOutStack />}</>;
}
