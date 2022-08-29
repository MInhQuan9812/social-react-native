import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Home/Header';
import Stories from './components/Home/Stories';
import Feed from './components/Home/Feed';
import BottomTabs from './components/Home/BottomTab';
// import getFeed from './../service/Feed/getFeed'
import axios from 'axios';

const getFeedToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJpZCI6IjEyIiwidXNlck5hbWUiOiIxMi4xOF94b3giLCJuYmYiOjE2NjE3NDAzNTgsImV4cCI6MTY2NDMzMjM1OCwiaWF0IjoxNjYxNzQwMzU4fQ.hjAfWbc1QJpJrUN9B0yVyKDJoJQe_-NwQ1yQAAqvHBg';

export default function Home() {
  const [feedData, setFeedData] = useState([]);
  const getFeedData = () => {
    axios('https://www.pgonevn.com/api//Feed/GetAll', {
      headers: {
        Authorization: `Bearer ${getFeedToken}`,
      },
    })
      .then(res => setFeedData(res.data.result))
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };
  useEffect(() => {
    getFeedData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.stories}>
          <Stories />
        </View>
        <View style={styles.feed}>
          <Feed feedData={feedData} />
        </View>
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
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
