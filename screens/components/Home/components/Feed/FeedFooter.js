import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';

export default function FeedFooter({navigation, ...props}) {
  const [like, setLike] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_header}>
        <View style={styles.wrapper_IconsLeft}>
          <LikeIcon onClick={isLiked} setOnClick={setIsLiked} />
          <CommentIcon navigation={navigation} />
          <SharePostIcon />
        </View>
        <View style={styles.wrapper_IconsRight}>
          <SavePostIcon onClick={isSaved} setOnClick={setIsSaved} />
        </View>
      </View>
      <View style={styles.wrapper_body}>
        <Text style={styles.textDecoration}>
          {like ? setIsLiked(true) : 2.168} lượt thích
        </Text>
        <View>
          {props.caption !== '' ? (
            <View style={styles.wrapper_Caption}>
              <Text style={styles.nickName}>{props.nickName}</Text>
              <Text style={styles.caption}>{props.caption}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  wrapper_header: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper_body: {
    marginRight: 15,
    marginLeft: 15,
  },
  textDecoration: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  iconsLeft: {
    marginRight: 15,
    color: '#000000',
  },
  nickName: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },
  wrapper_IconsLeft: {
    flexDirection: 'row',
  },
  wrapper_Caption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    fontSize: 19,
    color: '#000000',
    fontWeight: '300',
  },
  isSavedIcon: {
    marginRight: 15,
    color: '#000000',
  },
  wrapper_IconsRight: {},
  iconsRight: {
    color: '#000000',
  },
  likeIcon_handle: {
    color: 'red',
    marginRight: 15,
  },
});

const SavePostIcon = props => {
  return (
    <TouchableOpacity onPress={() => props.setOnClick(true)}>
      <Ionicons
        style={styles.iconsRight}
        size={30}
        name={props.onClick ? 'bookmark-sharp' : 'bookmark-outline'}
      />
    </TouchableOpacity>
  );
};
const CommentIcon = props => {
  return (
    <TouchableOpacity onPress={() => console.log('navigate comment screen')}>
      <Ionicons style={styles.iconsLeft} size={30} name="chatbubble-outline" />
    </TouchableOpacity>
  );
};
const LikeIcon = props => {
  return (
    <TouchableOpacity onPress={() => props.setOnClick(true)}>
      <Ionicons
        style={props.onClick ? styles.likeIcon_handle : styles.iconsLeft}
        size={30}
        name={props.onClick ? 'heart-sharp' : 'heart-outline'}
      />
    </TouchableOpacity>
  );
};

const SharePostIcon = () => {
  return (
    <TouchableOpacity onPress={() => console.log('navigate share post')}>
      <Ionicons style={styles.iconsLeft} size={30} name="paper-plane-outline" />
    </TouchableOpacity>
  );
};
// const Icon = [
//   {
//     name1: 'heart-outline',
//     name2: 'heart-sharp',
//   },
//   {
//     name1: 'chatbubble-outline',
//     name2: 'chatbubble-sharp',
//   },
//   {
//     name1: 'paper-plane-outline',
//     name2: 'paper-plane-sharp',
//   },
// ];
