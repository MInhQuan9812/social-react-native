import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function Email(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Số điện thoại, email"
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType="email-address"
        autoFocus={true}
        textContentType="emailAddress"
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        style={styles.textDecoration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 3,
    borderWidth: 0.15,
    backgroundColor: '#F5F5F5',
    marginTop:14,
    padding: 3,
  },
  textDecoration: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
  },

});