import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Stories() {
  return (
    <FlatList
      nestedScrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={USER}
      renderItem={_renderItem}
    />
  );
}

const _renderItem = ({item}) => (
  <View style={styles.wrapper}>
    <View style={styles.wrapper_Image}>
      <Image source={item.image} style={styles.image} />
    </View>
    <Text style={styles.nickName}>
      {item.name.length > 10
        ? item.name.slice(0, 9) + '...'
        : item.name.toLowerCase()}
    </Text>
  </View>
);

const USER = [
  {
    image: require('../../../assets/Images/UserImage.png'),
    name: 'Tin của bạn',
  },
  {
    image: require('../../../assets/Images/2.jpg'),
    name: 'nevskaya_95',
  },
  {
    image: require('../../../assets/Images/2.jpg'),
    name: 'may__lily',
  },
  {
    image: require('../../../assets/Images/2.jpg'),
    name: 'lylyofficial.0101',
  },
  {
    image: require('../../../assets/Images/2.jpg'),
    name: 'Phương Ly',
  },
  {
    image: require('../../../assets/Images/2.jpg'),
    name: 'Phương Ly',
  },
  {
    image: require('../../../assets/Images/2.jpg'),
    name: 'Phương Ly',
  },
];
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    backgroundColor: 'red',
  },
  wrapper: {
    margin: 3,
    alignItems: 'center',
  },
  wrapper_Image: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff8501',
    margin: 6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    margin: 1,
  },
  nickName: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});

// background-color: #FFCC70;
// background-image: linear-gradient(43deg, #FFCC70 31%, #C850C0 69%);
