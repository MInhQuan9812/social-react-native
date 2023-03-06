import {View, Text} from 'react-native';
import React from 'react';
import SearchBox from './components/Search/SearchBox';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import SearchContent from './components/Search/SearchContent';
import {useState} from 'react';
import {ScrollView} from 'react-native';

export default function Search({navigation}) {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBox: {},
});
