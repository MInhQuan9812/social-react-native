import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function FeedBody(props) {
  const [imgSwipper, setImgSwipper] = useState(0);

  onChange = action => {
    if (action) {
      const slide = Math.ceil(
        action.contentOffset.x / action.layoutMeasurement.width,
      );
      if (slide != imgSwipper) {
        setImgSwipper(slide);
      }
    }
  };

  return (
    <View style={styles.body_Container}>
      <Text style={styles.caption}>{props.caption}</Text>
      <View style={styles.wrapper}>
        <ScrollView
          nestedScrollEnabled={false}
          onScroll={({action}) => onChange(action)}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}>
          {props.image.map((item, index) => (
            <View key={index} style={styles.wrapper_Image}>
              <Image
                key={index}
                style={{width: '100%', height: 450}}
                source={{uri: item.url}}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.wrapperDot}>
        {props.image.map((item, index) => (
          <Text
            key={index}
            style={imgSwipper == index ? styles.activeDot : styles.classicDot}>
            ●
          </Text>
        ))}
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    height: 450,
  },
  wrapper_Image: {
    width: WIDTH,
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
  wrapperDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  activeDot: {
    margin: 3,
    color: '#1E90FF',
  },
  classicDot: {
    margin: 3,
    color: '#A9A9A9',
  },
});
