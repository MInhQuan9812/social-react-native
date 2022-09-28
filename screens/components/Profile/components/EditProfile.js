import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Divider} from '@rneui/themed';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import FullNameEditBox from './FullNameEditBox';
import {Dimensions} from 'react-native';
import UserNameEditBox from './UserNameEditBox';
import BioProfileEditBox from './BioProfileEditBox';
import WebProfileEditBox from './WebProfileEditBox';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Alert} from 'react-native';
import {TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

export default function EditProfile({route, navigation, ...props}) {
  const {username, fullname, avatar, bio} = route.params;
  const [changeFullName, setChangeFullName] = useState(null);
  const [changeUserName, setChangeUserName] = useState(null);
  const [changeBio, setChangeBio] = useState(null);
  const [changeAvatar, setChangeAvatar] = useState(null);
  const [uploadAvatar, setUploadAvatar] = useState(null); //

  var bodyFormData = new FormData();
  bodyFormData.append('', {
    uri: uploadAvatar,
  });

  const authTokenFromDevice = async () => {
    return await AsyncStorage.getItem('Instagram-AuthToken');
  };
  const patchChangeInformation = async () => {
    //API
    try {
      if (changeFullName !== null) {
        const patchFullName = await axios.patch(
          'https://www.pgonevn.com/api/account/Profile/UpdateFullname',
          {fullname: changeFullName},
          {
            headers: {
              Authorization: `Bearer ${await authTokenFromDevice()}`,
            },
          },
        );
        const FullNameData = await patchFullName.data.result.fullname;
      }
      if (changeBio !== null) {
        const patchBio = await axios.patch(
          'https://www.pgonevn.com/api/account/Profile/UpdateBio',
          {Bio: changeBio},
          {
            headers: {
              Authorization: `Bearer ${await authTokenFromDevice()}`,
            },
          },
        );
        const BioData = await patchBio.data.result.bio;
      }
      // if (changeAvatar !== null) {
      //   const patchAvatarData = await axios.patch(
      //     'https://www.pgonevn.com/api/account/Profile/UpdateAvatar',
      //     {Avatar: changeAvatar},
      //     {
      //       headers: {
      //         Authorization: `Bearer ${await authTokenFromDevice()}`,
      //       },
      //     },
      //   );
      //   const AvatarData = await patchAvatarData.data.result.avatar;
      // }

      const postUploadAvatarData = await axios.post(
        'https://www.pgonevn.com/clould/media/upload',
        bodyFormData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const AvatartUploadData = await postUploadAvatarData.result.medias.url;
      setChangeAvatar(AvatartUploadData);

      // axios
      //   .post('https://www.pgonevn.com/clould/media/upload', bodyFormData, {
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log('error from image :');
      //     console.log(err);
      //   });

      // const AvatartUploadData1 = async () =>
      //   await postUploadAvatarData
      //     .then(res => {
      //       console.log(res);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // console.log(FullNameData);
      // console.log(BioData);
      // console.log(AvatarData);
      // Console.log(AvatartUploadData);
      //postUploadAvatarData1();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setChangeAvatar(image);
      this.bs.current.snapTo(1);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image.path);
      setUploadAvatar(image.path);
      this.bs.current.snapTo(1);
    });
  };
  renderInner = () => (
    <View style={{backgroundColor: '#f2f2f2', margin: 10, borderRadius: 10}}>
      <View style={{alignItems: 'center'}}>
        {avatar == null ? (
          <View style={styles.panelButton}>
            <Image
              style={styles.image2}
              source={
                avatar
                  ? {uri: avatar}
                  : require('../../../../assets/Images/UserImage.png')
              }
            />
            <Text>Đã đồng bộ ảnh đại diện</Text>
            <Text>Instagram, Facebook</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.panelButton}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
              Gỡ ảnh đại diện
            </Text>
          </TouchableOpacity>
        )}
        <Divider width={1} orientation="vertical" />
        <TouchableOpacity
          style={styles.panelButton}
          onPress={takePhotoFromCamera}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
            Chụp ảnh
          </Text>
        </TouchableOpacity>
        <Divider width={1} orientation="vertical" />
        <TouchableOpacity
          style={styles.panelButton}
          onPress={choosePhotoFromLibrary}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
            Chọn trong thư viện ảnh
          </Text>
        </TouchableOpacity>
        <Divider width={1} orientation="vertical" />
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => this.bs.current.snapTo(1)}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
            Hủy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        {/* <View style={styles.panelHandle}></View> */}
      </View>
    </View>
  );
  bs = React.createRef();
  fall = new Animated.Value(1);
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
        enabledManualSnapping={true}
      />
      <Animated.View
        style={{
          opacity: Animated.add(0.2, Animated.multiply(this.fall, 1.0)),
        }}>
        {/* Header */}
        <View>
          <View style={styles.wrapper_Header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textDecoration_Header}>Hủy</Text>
            </TouchableOpacity>
            <Text style={styles.textDecoration_Header.bold}>
              Chỉnh sửa trang cá nhân
            </Text>
            <TouchableOpacity
              onPress={() => {
                changeFullName !== null ||
                changeBio !== null ||
                uploadAvatar !== null
                  ? patchChangeInformation()
                  : null;
              }}
              onPressOut={() => navigation.goBack()}>
              <Text style={styles.textDecoration_Header.complete}>Xong</Text>
            </TouchableOpacity>
          </View>
          <Divider width={1} orientation="vertical" />
        </View>
        {/* Header */}

        {/* Body */}
        <View style={styles.wrapper_Body}>
          <Image
            style={styles.image}
            source={
              avatar
                ? {uri: avatar}
                : require('../../../../assets/Images/UserImage.png')
            }
          />
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <Text style={styles.textDecoration_Body}>
              Thay đổi ảnh đại diện
            </Text>
          </TouchableOpacity>
        </View>
        {/* Body */}

        {/* Footer */}
        <View style={styles.wrapper_Footer}>
          <View style={styles.information_Profile}>
            <Divider width={1} orientation="vertical" style={{marginTop: 10}} />

            {/* FullName */}
            <View style={styles.boxElement}>
              <View style={{width: (WIDTH * 1) / 4}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
                  Tên
                </Text>
              </View>
              <View style={styles.wrapper}>
                <TextInput
                  placeholder=""
                  defaultValue={fullname}
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoFocus={false}
                  onChangeText={text => setChangeFullName(text)}
                  onEndEditing={() => console.log(changeFullName)}
                  style={styles.textDecoration}
                />
              </View>
            </View>
            {/* FullName */}

            {/* UserName */}
            <View style={styles.boxElement}>
              <View style={{width: (WIDTH * 1) / 4}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
                  Tên người dùng
                </Text>
              </View>
              <View style={styles.wrapper}>
                <TextInput
                  placeholder=""
                  defaultValue={username}
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoFocus={false}
                  onChangeText={text => setChangeUserName(text)}
                  onEndEditing={() => console.log(changeUserName)}
                  style={styles.textDecoration}
                />
              </View>
            </View>
            {/* UserName */}

            {/* Bio */}
            <View style={styles.boxElement}>
              <View style={{width: (WIDTH * 1) / 4}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
                  Tiểu sử
                </Text>
              </View>
              <View style={styles.wrapper}>
                <TextInput
                  placeholder=""
                  defaultValue={bio}
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoFocus={false}
                  onChangeText={text => setChangeBio(text)}
                  onEndEditing={() => console.log(changeBio)}
                  style={styles.textDecoration}
                />
              </View>
            </View>
            {/* Bio */}
            <View style={styles.boxElement}>
              <View style={{width: (WIDTH * 1) / 4}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '450'}}>
                  Trang Web
                </Text>
              </View>
              <WebProfileEditBox />
            </View>
          </View>

          <Divider width={1} orientation="vertical" style={{marginTop: 7}} />
        </View>
        {/* Footer */}
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper_Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
  },
  textDecoration_Header: {
    fontSize: 17,
    color: 'black',
    bold: {
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
    },
    complete: {
      color: '#01bbfa',
      fontSize: 20,
    },
  },
  wrapper_Body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 25,
  },
  textDecoration_Body: {
    fontSize: 15,
    color: '#01bbfa',
    marginTop: 10,
    fontWeight: '600',
  },
  panelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'orange',
    // padding: 13,
    paddingTop: 13,
    paddingBottom: 13,
    width: '100%',
  },
  boxElement: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  information_Profile: {},
  wrapper: {
    backgroundColor: 'white',
  },
  textDecoration: {
    fontSize: 16,
    fontWeight: '450',
    color: 'black',
    width: WIDTH - 20 - (WIDTH * 1) / 4,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
  },
  header: {
    backgroundColor: 'blue',
    shadowColor: 'grey',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    // paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'black',
  },
  panelHeader: {
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    // backgroundColor: 'yellow',
    marginBottom: 10,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 25,
  },
});
