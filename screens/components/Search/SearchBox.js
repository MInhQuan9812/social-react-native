import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';

export default function SearchBox() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
      }}>
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Tìm kiếm"
        placeholderTextColor="#909090"
        style={{
          width: '94%',
          backgroundColor: '#EBEBEB',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 17,
          fontWeight: '600',
          padding: 4,
          paddingLeft: 40,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
