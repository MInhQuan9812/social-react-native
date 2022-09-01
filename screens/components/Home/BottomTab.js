import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider} from 'react-native-elements';

export default function BottomTabs(props) {
  const [onclick, setOnClick] = useState('home');
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={styles.wrapper}>
        {IconMenu.map((item, index) => (
          <View key={index}>
            <Icon {...item} onclick={onclick} setOnClick={setOnClick} />
          </View>
        ))}
      </View>
    </View>
  );
}
const Icon = props => (
  <TouchableOpacity onPress={() => props.setOnClick(props.name2)}>
    <View>
      <Ionicons
        name={props.onclick === props.name2 ? props.name2 : props.name1}
        size={33}
        style={{
          marginBottom: 3,
          alignSelf: 'center',
          color: props.onclick === props.name2 ? '#000000' : '#000000',
        }}
      />
    </View>
  </TouchableOpacity>
);
const IconMenu = [
  {
    name1: 'home-outline',
    name2: 'home',
  },
  {
    name1: 'search-outline',
    name2: 'search-sharp',
  },
  {
    name1: 'videocam-outline',
    name2: 'videocam-sharp',
  },
  {
    name1: 'heart-outline',
    name2: 'heart-sharp',
  },
  {
    name1: 'people-circle-outline',
    name2: 'people-circle-sharp',
  },
];

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 30,
  },
});
