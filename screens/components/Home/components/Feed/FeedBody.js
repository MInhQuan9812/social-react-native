import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
// import PagerView from 'react-native-pager-view';
import ViewPager from '@react-native-community/viewpager';
import Swiper from 'react-native-swiper';

export default function FeedBody(props) {
  return (
    <View style={styles.body_Container}>
      <Text style={styles.caption}>{props.caption}</Text>
      <Swiper
        loadMinimal
        loadMinimalSize={1}
        loop={false}
        style={styles.wrapper}
        horizontal={true}
        showsButtons>
        {props.image.map((item, index) => (
          <View key={index} style={styles.wrapper_Image}>
            <Image style={styles.image} source={{uri: item.url}} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  wrapper_Image: {
    width: '100%',
    backgroundColor: 'grey',
    flex: 1,
  },
  image: {
    height: '100%',
    resizeMod: 'cover',
  },
  caption: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    margin: 5,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    height:450,
  },
});
