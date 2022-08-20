import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Home/Header';
import Stories from './components/Home/Stories';
import Feed from './components/Home/Feed';
import axios from 'axios';
import BottomTabs from './components/Home/BottomTab';

const getFeedToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJpZCI6IjIiLCJ1c2VyTmFtZSI6ImJpdHJhbSIsIm5iZiI6MTY1OTExNTA0MCwiZXhwIjoxNjYxNzA3MDQwLCJpYXQiOjE2NTkxMTUwNDB9.I6TE8O9WHWJOzc97X8Z43M_Yjd4-0ghOFqrRQsrIdps';
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
      <View style={styles.stories}>
        <Stories />
      </View>
      <ScrollView style={styles.feed}>
        <Feed feedData={feedData} />
      </ScrollView>
      <BottomTabs/>
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
