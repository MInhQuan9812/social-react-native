import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import InstagramLogo from './../assets/Logo/Instagram 1.svg';
import LoginUser from './components/Login/LoginUser';
import LoginPassword from './components/Login/LoginPassword';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import LoginButton from './components/Login/LoginButton';
import LinkToSignUp from './components/Login/LinkToSignUp';
import ResetPassword from './components/Login/ResetPassword';
import AuthNavigation from '../AuthNavigation'
import RNRestart from 'react-native-restart';
import { SignedInStack } from '../navigation'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const width_height_Logo = 80;

export default function Login({navigation}) {
  // Formik + Yup
  const LoginFormSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email(),
    password: Yup.string().required(),
  });

  const postLogin = async (name, password) => {
    try {
      const res = await axios.post(
        'https://www.pgonevn.com/api/account/Login',
        {
          username: `${name}`,
          password: `${password}`,
        },
      );
      const token = await res.data.result.token;
      await AsyncStorage.setItem('Instagram-AuthToken',token)
      navigation.navigate('BottomTabView')
    } catch (error) {
      Alert.alert('Sai tài khoản, mật khẩu',error.message + '\n\n... What would you like to do next??', [
        {
          text: 'Đăng ký',
          onPress: () => navigation.navigate('Sign Up'),
        },
        {
          text: 'Thử lại',
          onPress: () => console.log('Ok'),
          style: 'cancel',
        },
      ]);
    }

    // Sau khi có token từ server, lưu token xuống bộ nhớ máy
    // Dùng `AsyncStorage.setItem('Instagram-AuthToken', token)`
    // Đặt key là `Instagram-AuthToken`
    //   AsyncStorage.setItem('Instagram-AuthToken', token);
    //   // Sau đó navigate đến Home
    //   navigation.navigate('Home');
    // })
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <InstagramLogo width={width_height_Logo} height={width_height_Logo} />
      </View>

      <View style={styles.loginForm}>
        <Formik
          initialValues={{name: '', password: ''}}
          onSubmit={values => {
            postLogin(values.name, values.password);
          }}
          validationSchema={LoginFormSchema}
          validateOnMount={true}>
          {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
            <>
              <View style={styles.wrapper}>
                <LoginUser
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <LoginPassword
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <ResetPassword />
              <LoginButton
                navigation={navigation}
                handleSubmit={handleSubmit}
                disabled={!isValid}
                isValid={isValid}
              />
              <LinkToSignUp navigation={navigation}/>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: WIDTH / 2 - width_height_Logo / 2,
    alignItems: 'center',
  },
  loginForm: {marginTop: 20, marginLeft: 20, marginRight: 20},
});
