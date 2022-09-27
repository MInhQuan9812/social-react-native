import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import PlusIcon from '../../../../assets/Logo/plus.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <HandleAccountChangeButton username={props.profileData.userName} />

        <View style={styles.wrapper_header_Icon}>
          <HandlePlusButton />
          <HandleChevronButton />
        </View>
      </View>
    </View>
  );
}

const HandleAccountChangeButton = props => {
  return (
    <TouchableOpacity>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Text style={styles.userName}>{props.username}</Text>
        <Ionicons size={20} name="md-chevron-down-outline" />
      </View>
    </TouchableOpacity>
  );
};

const HandlePlusButton = props => {
  return (
    <TouchableOpacity>
      <PlusIcon width="30" height="30" color="black" />
    </TouchableOpacity>
  );
};

const HandleChevronButton = props => {
  return (
    <TouchableOpacity>
      <Ionicons size={39} name="md-menu-sharp" color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  userName: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  wrapper_header_Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH * (1 / 5 + 1 / 30),
    justifyContent: 'space-between',
  },
});
