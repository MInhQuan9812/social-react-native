import {View, Text, StyleSheet,} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import FeedHeader from './components/Feed/FeedHeader';
import FeedBody from './components/Feed/FeedBody';
import FeedFooter from './components/Feed/FeedFooter';

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
          <FeedFooter nickName={item.creator.userName} caption={item.caption} />
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
