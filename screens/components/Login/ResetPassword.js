import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ResetPassword() {
  return (
    <View style={{alignItems: 'flex-end', marginTop: 20}}>
      <TouchableOpacity>
        <Text style={styles.missedPassword_Text}>Quên mật khẩu?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  missedPassword_Text: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#1E90FF',
  },
});
