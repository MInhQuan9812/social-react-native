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

  // const obj = JSON.parse(props.feedStyle);
  // console.log(obj.subLayout);
  // getStyleFeed = function (item) {
  //   if (item.subLayout === 'square') {
  //     return {
  //       width: WIDTH,
  //       height: WIDTH * 1,
  //     };
  //   } else if (item.subLayout === 'portrait') {
  //     return {
  //       width: WIDTH,
  //       height: WIDTH * 1.25,
  //     };
  //   } else if (item.subLayout === 'landscape') {
  //     return {
  //       width: WIDTH,
  //       height: WIDTH * 0.25,
  //     };
  //   }
  // };
  {
    /* {props.style.map((item, index) => (
          // <WrapperImage
          //   key={index}
          //   varibles={item.subLayout}
          //   image={props.image}
          // />
        ))} */
  }

  // (Android & Ios (Instagram))
  //Portrait: height = width x 1.25;
  //LandScape: height = width x 0.52;
  //Square: height = width x 1;
  // Unidentified: height = width x 0.6;

  return (
    <View style={styles.body_Container}>
      <Text style={styles.caption}>{props.caption}</Text>
      <ScrollView
        nestedScrollEnabled={false}
        style={styles.wrapper}
        onScroll={({action}) => onChange(action)}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {props.image.map((item, index) => (
          <View key={index} style={styles.wrapper_Image}>
            <Image style={styles.image} source={{uri: item.url}} />
          </View>
        ))}
      </ScrollView>

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
  },
  wrapper_Image: {
    width: WIDTH,
    height: WIDTH * 1,
  },
  image: {
    height: '100%',
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
