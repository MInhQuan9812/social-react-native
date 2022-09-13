import {View, Text, StyleSheet, FlatList, VirtualizedList} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/themed';
import FeedHeader from './components/Feed/FeedHeader';
import FeedBody from './components/Feed/FeedBody';
import FeedFooter from './components/Feed/FeedFooter';

export default function Feed({...props}) {
  return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.feedData}
          renderItem={_renderItem}
        />
  );
}

const _renderItem = ({item}) => (
  <View style={styles.container}>
    <Divider width={1} orientation="vertical" />
    <FeedHeader avatar={item.creator.avatar} nickName={item.creator.userName} />
    <FeedBody image={item.medias} />
    <FeedFooter createTimer={item.medias.createAt} nickName={item.creator.userName} caption={item.caption} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
