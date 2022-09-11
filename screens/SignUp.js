import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import React from 'react';
import BlackInsLogo from '../assets/Logo/Instagram-Wordmark-Black-Logo.wine.svg';
import Email from './components/Sign Up/Email';
import UserName from './components/Sign Up/UserName';
import FullName from './components/Sign Up/FullName';
import Password from './components/Sign Up/Password';
import SignUpButton from './components/Sign Up/SignUpButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import LinkToLogin from './components/Sign Up/LinkToLogin';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const width_height_Logo = 80;

export default function SignUp({navigation}) {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().required(),
    username: Yup.string().required(),
    fullname: Yup.string().required().min(6, 'Mật khẩu cần ít nhất 6 kí tự'),
  });

  const postSignUp = async (email, fullname, username, password) => {
    try {
      const res = await axios.post(
        'https://www.pgonevn.com/api/account/SignUp',
        {
          email: `${email}`,
          username: `${username}`,
          fullname: `${fullname}`,
          password: `${password}`,
        },
      );
      const token=await res.data.result.token;
      console.log(token)
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <BlackInsLogo width={(WIDTH * 1.5) / 3} height="60" />
      </View>
      <View style={styles.wrapper_textIntro}>
        <Text style={styles.textIntro}>
          Đăng ký để xem ảnh và video từ bạn bè.
        </Text>
      </View>

      <View style={styles.signUpFrom}>
        <Formik
          initialValues={{email: '', fullname: '', username: '', password: ''}}
          onSubmit={values => {
            postSignUp(
              values.email,
              values.fullname,
              values.username,
              values.password,
            );
          }
          }
          validationSchema={SignUpFormSchema}
          validateOnMount={true}>
          {({handleSubmit, handleBlur, handleChange, values, isValid}) => (
            <>
              <View style={styles.wrapper}>
                <Email
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <FullName
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                />
                <UserName
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <Password
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <SignUpButton
                navigation={navigation}
                handleSubmit={handleSubmit}
                disabled={!isValid}
                isValid={isValid}
              />
              <LinkToLogin navigation={navigation}/>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: (WIDTH * 2) / 10,
    alignItems: 'center',
  },
  wrapper_textIntro: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIntro: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  signUpFrom: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
