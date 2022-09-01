import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FeedHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.avatar} source={{uri: props.avatar}} />
        <Text style={styles.nickName}>{props.nickName}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.mark_Mini_Button}>...</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignCenter: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  nickName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
  },
  mark_Mini_Button: {
    fontSize: 20,
    fontWeight: '1500',
    marginRight: 5,
    color: '#000000',
  },
});
