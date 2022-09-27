import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import UserImage from '../../../../assets/Images/UserImage.png';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import PlusIcon from '../../../../assets/Logo/add-circle-sharp.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default function Body({navigation, ...props}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.wrapper_Image_PlusIcon}>
          <TouchableOpacity>
            <View>
              <Image
                source={
                  props.profileData.avatar
                    ? {uri: props.profileData.avatar}
                    : require('../../../../assets/Images/UserImage.png')
                }
                style={styles.image}
              />
            </View>
            <MaterialCommunityIcons
              size={29}
              name="plus-circle"
              style={styles.plusIcon}
            />
          </TouchableOpacity>
          <Text style={styles.fullName}>{props.profileData.fullname}</Text>
        </View>

        <View style={styles.number__OfFollowersAndPost}>
          <View style={styles.elementStyle_OfFollowersAndPost}>
            <Text style={styles.count}>0</Text>
            <Text style={styles.text}>Bài viết</Text>
          </View>
          <View style={styles.elementStyle_OfFollowersAndPost}>
            <Text style={styles.count}>{props.profileData.followerCount}</Text>
            <Text style={styles.text}>Người theo dõi</Text>
          </View>
          <View style={styles.elementStyle_OfFollowersAndPost}>
            <Text style={styles.count}>{props.profileData.followingCount}</Text>
            <Text style={styles.text}>Đang theo dõi</Text>
          </View>
        </View>
      </View>

      <View style={styles.wrapperBody}>
        <TouchableOpacity
          onPress={() =>
            navigation.push('EditProfile', {
              username: props.profileData.userName,
              fullname: props.profileData.fullname,
              avatar: props.profileData.avatar,
              bio: props.profileData.bio,
            })
          }>
          <View style={styles.editProfileButton}>
            <Text style={styles.text}>Chỉnh sửa trang cá nhân</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.showNewProfilerButton}>
            <Ionicons name="md-person-add-sharp" size={16} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: (WIDTH * 1) / 40,
  },
  wrapperBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  editProfileButton: {
    width: (WIDTH * 8) / 10,
    backgroundColor: '#f0ece5',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    height: 35,
  },
  showNewProfilerButton: {
    width: (WIDTH * 1) / 10,
    backgroundColor: '#f0ece5',
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    borderRadius: 5,
  },
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper_Image_PlusIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: (WIDTH * 1) / 4.25,
    height: (WIDTH * 1) / 4.25,
    borderRadius: 50,
  },
  fullName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginTop: (((WIDTH * 1) / 4.25) * 1) / 1 / 10,
  },
  plusIcon: {
    color: '#1A74E4',
    position: 'absolute',
    top: (((WIDTH * 1) / 4.25) * 3) / 4,
    right: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number__OfFollowersAndPost: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  elementStyle_OfFollowersAndPost: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
  count: {
    color: 'black',
    fontWeight: '800',
    fontSize: 17,
  },
});
