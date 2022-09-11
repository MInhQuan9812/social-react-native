import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function LinkToSignUp({navigation}) {
  return (
    <View style={styles.signupContainer}>
      <Text style={{fontSize: 16, fontWeight: '400'}}>
        Bạn chưa có tài khoản?
      </Text>
      <Text
        style={{
          color: '#1E90FF',
          fontSize: 16,
          fontFamily: 'Poppins-Regular',
          fontWeight: 'bold',
        }}
        onPress={()=>navigation.navigate('Sign Up')}>
        Đăng kí
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
});
