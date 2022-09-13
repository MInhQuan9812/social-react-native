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
import {Divider} from '@rneui/themed';

export default function BottomTabs({navigation, props}) {
  const [onclick, setOnClick] = useState('home');
  // const [onNavigate, setOnNavigate] = useState('Home');
  
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={styles.wrapper}>
        {IconMenu.map((item, index) => (
          <View key={index}>
            <Icon
              {...item}
              onclick={onclick}
              navigation={navigation}
              setOnClick={setOnClick}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
const Icon = ({navigation, ...props}) => (
  <TouchableOpacity
    onPress={() => props.setOnClick(props.name2)}
    // onPressIn={() => navigation.navigate(`${props.navigate}`)}
    // Configure BottomTabView in navigation class.
  >
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
    navigate: 'Home',
  },
  {
    name1: 'search-outline',
    name2: 'search-sharp',
    navigate: 'Search',
  },
  {
    name1: 'videocam-outline',
    name2: 'videocam-sharp',
    navigate: 'Home',
  },
  {
    name1: 'heart-outline',
    name2: 'heart-sharp',
    navigate: 'Home',
  },
  {
    name1: 'people-circle-outline',
    name2: 'people-circle-sharp',
    navigate: 'Profile',
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
