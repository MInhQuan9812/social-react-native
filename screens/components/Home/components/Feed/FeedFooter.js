import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FeedFooter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_header}>
        <View style={styles.wrapper_IconsLeft}>
          {Icon.map((item, index) => (
              <Ionicons style={styles.iconsLeft} key={index} size={30} name={item.name1} />
          ))}
        </View>
        <View style={styles.wrapper_Iconsright}>
          <Ionicons style={styles.iconsRight} size={30} name="bookmark-outline" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapper_header: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper_IconsLeft: {
    flexDirection: 'row',
  },
  iconsLeft:{
    marginRight:15,
    color:"#000000"
  },
  wrapper_Iconsright: {   
  },
  iconsRight: {
    color:"#000000"

  }
});

const Icon = [
  {
    name1: 'heart-outline',
    name2: 'heart-sharp',
  },
  {
    name1: 'chatbubble-outline',
    name2: 'chatbubble-sharp',
  },
  {
    name1: 'paper-plane-outline',
    name2: 'paper-plane-sharp',
  },
];
