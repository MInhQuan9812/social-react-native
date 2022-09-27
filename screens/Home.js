import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import Header from './components/Home/Header';
import Stories from './components/Home/Stories';
import Feed from './components/Home/Feed';
import BottomTabs from './components/Home/BottomTab';
import axios from 'axios';

export default function Home({navigation}) {
  const [feedData, setFeedData] = useState([]);

  // Khi vô Home rồi lấy token dưới bộ nhớ máy đã lưu từ trước lên kèm vô Header
  // `authTokenFromDevice()`
  // Những màn hình khác tương tự Home
  const authTokenFromDevice = async () => {
    return await AsyncStorage.getItem('Instagram-AuthToken');
  };
  const getFeedData = async () => {
    return axios('https://www.pgonevn.com/api/Feed/GetAll', {
      headers: {
        Authorization: `Bearer ${await authTokenFromDevice()}`,
      },
    });
  };

  useEffect(() => {
    getFeedData()
      .then(res => {
        setFeedData(res.data.result);
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
        <Header />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.stories}>
          <Stories />
        </View>
        <View style={styles.feed}>
          <Feed feedData={feedData} />
        </View>
      </ScrollView>
      {/* Configure BottomTabView in navigation class.
       <View>
        <BottomTabs navigation={navigation} />
      </View>  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // width: '100%',
  },
  header: {
    padding: 5,
  },
  body: {
    width: '100%',
    height: '100%',
  },
  stories: {},
  feed: {
    marginTop: 3,
  },
});
