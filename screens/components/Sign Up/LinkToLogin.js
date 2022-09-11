import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function LinkToLogin({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textDecoration.non_color}>Bạn đã có tài khoản? </Text>
      <Text style={styles.textDecoration.color} onPress={()=>navigation.goBack('Login')}>Đăng nhập</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textDecoration: {
    non_color: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      fontWeight: '300'
    },
    color: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: '#1E90FF',
      fontWeight: 'bold'
    },
  },
});
