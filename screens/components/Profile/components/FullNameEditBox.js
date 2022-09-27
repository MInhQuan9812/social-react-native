import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Divider} from '@rneui/themed';
import {Dimensions} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const WIDTH = Dimensions.get('window').width;
export default function FullNameEditBox(props,nameV) {
  const [changeFullName, setChangeFullName] = useState(null);
  nameV=changeFullName;
  
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder=""
        defaultValue={props.fullname}
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType="email-address"
        autoFocus={false}
        onChangeText={text => setChangeFullName(text)}
        onEndEditing={()=>console.log(nameV)}
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
    width: WIDTH - 20 - (WIDTH * 1) / 4,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
  },
});
