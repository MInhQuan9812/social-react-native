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
  const [imgActive, setImgActive] = useState(0);
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View style={styles.body_Container}>
      <ScrollView
        style={styles.wrapper}
        onScroll={({nativeEvent}) => {
          onChange(nativeEvent);
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {props.image.map((item, index) => (
          <View style={styles.wrapper_Image}>
            <Image key={index} style={styles.image} source={{uri: item.url}} />
          </View>
        ))}
      </ScrollView>

      {props.image.length !== 1 ? (
        <View style={styles.wrapperDot}>
          {props.image.map((e, index) => (
            <Text
              key={index}
              style={imgActive == index ? styles.activeDot : styles.classicDot}>
              ●
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body_Container: {
    flex: 1,
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
    bottom: -40,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: WIDTH / 2,
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
