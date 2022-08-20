import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTabs(props) {
  const [onclick, setOnClick] = useState('home');
  return (
    <View
      style={{
        margin: 10,
        marginHorizontal: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {IconMenu.map((item, index) => (
          <View key={index} style={{alignItems: 'center'}}>
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
