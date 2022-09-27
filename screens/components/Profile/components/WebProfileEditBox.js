import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/themed';
import { Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
export default function WebProfileEditBox(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder=""
        defaultValue=""
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType="email-address"
        autoFocus={false}
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
    backgroundColor: 'white',
  },
  textDecoration: {
    fontSize: 16,
    fontWeight: '450',
    color: 'black',
    width:WIDTH-20-WIDTH*1/4,

  },
});