import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import BlackInsLogo from '../../../assets/Logo/Instagram-Wordmark-Black-Logo.wine.svg';
import PlusIcon from '../../../assets/Logo/plus.svg';
import MesIconWhite from '../../../assets/Logo/messenger-mono.svg';
export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <BlackInsLogo width="145" height="50" style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <PlusIcon width="32" height="32" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <MesIconWhite width="32" height="32" />
            <View style={styles.mesBoxNotification}>
              <Text style={{color: 'white'}}>10</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 95,
    marginRight: 15,
  },
  mesBoxNotification: {
    backgroundColor: '#F91C3D',
    position: 'absolute',
    minWidth: 19,
    height: 19,
    left: 25,
    top: -2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
