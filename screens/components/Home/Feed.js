import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';

export default function Feed({...props}) {
  return (
    <>
      {props.feedData.map((item, index) => (
        <View style={styles.container} key={index}>
          <Divider width={1} orientation="vertical" />
          <FeedHeader
            avatar={item.creator.avatar}
            nickName={item.creator.userName}
          />
          <FeedBody caption={item.caption} image={item.medias} />
        </View>
      ))}
    </>
  );
}

const FeedHeader = props => (
  <View style={styles.header_Container}>
    <View style={styles.wrapper_Info}>
      <Image style={styles.avatar} source={{uri: props.avatar}} />
      <Text style={styles.nickName}>{props.nickName}</Text>
    </View>
    <TouchableOpacity>
      <Text
        style={styles.mark_Mini_Button}>
        ...
      </Text>
    </TouchableOpacity>
  </View>
);

const FeedBody = props => (
  <View style={styles.body_Container}>
    <Text style={styles.caption}>{props.caption}</Text>
    {props.image.map((item, index) => (
      <View key={index} style={styles.wrapper_Image}>
        <Image style={styles.image} source={item.url} />
      </View>
    ))}
  </View>
);

const FeedFooter = props => <View></View>;

const styles = StyleSheet.create({
  container: {},
  header_Container: {
    flexDirection: 'row',
    alignCenter: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  wrapper_Info: {
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
  body_Container: {
    paddingBottom: 15,
  },
  wrapper_Image: {
    width: '100%',
    height: 450,
    backgroundColor: 'grey',
  },
  image: {
    height: '100%',
    resizeMod: 'cover',
  },
  caption: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    margin: 5,
  },
  mark_Mini_Button: {
    fontSize: 20,
    fontWeight: '1500',
    marginRight: 5,
    color: '#000000',
  },
});
