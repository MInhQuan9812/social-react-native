import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

export default function Stories() {
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
    <ScrollView
      nestedScrollEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.wrapper_Image}>
          <Image
            source={
              profileData.avatar
                ? {uri: profileData.avatar}
                : require('../../../assets/Images/UserImage.png')
            }
            style={styles.image}
          />
        </View>
        <View
          style={styles.wrapper_Plus_Icon}>
          <MaterialCommunityIcons
            size={29}
            name="plus-circle"
            style={styles.plusIcon}
          />
        </View>

        <Text style={styles.nickName}>{profileData.userName}</Text>
      </TouchableOpacity>
      <FlatList
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        profileData={profileData}
        data={USER}
        renderItem={_renderItem}
      />
    </ScrollView>
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
  wrapper_Plus_Icon:{
    backgroundColor: 'white',
    padding: 1,
    borderRadius: 50,
    position: 'absolute',
    top: 58,
    right: 12,
  },
  plusIcon: {
    color: '#1A74E4',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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
