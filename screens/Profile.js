import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './components/Profile/components/Header';
import Body from './components/Profile/components/Body';
import Footer from './components/Profile/components/Footer';
import {StyleSheet} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useState} from 'react';

export default function Profile({navigation}) {
  const [profileData, setProfileData] = useState([]);

  const authTokenFromDevice = async () => {
    return await AsyncStorage.getItem('Instagram-AuthToken');
  };
  const getProfileData = async () => {
    return axios('https://www.pgonevn.com/api/account/Profile', {
      headers: {
        Authorization: `Bearer ${await authTokenFromDevice()}`,
      },
    });
  };

  useEffect(() => {
    getProfileData()
      .then(res => {
        setProfileData(res.data.result);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your operation: ' + error.message,
        );
        throw error;
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header profileData={profileData} />
      </View>
      <View style={styles.body}>
        <Body navigation={navigation} profileData={profileData}/>
      </View>
      <View style={styles.footer}>
        <Footer/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {},
  body: {
    // backgroundColor:'grey',    
  },
  footer:{}
});
