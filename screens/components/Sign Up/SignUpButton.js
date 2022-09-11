import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Pressable,
  } from 'react-native';
  import React from 'react';
  
  export default function SignUpButton(props) {
  
    return (
      <Pressable
        onPress={props.handleSubmit}
        disabled={props.disabled}
        style={styles.button(props.isValid)}>
        <View>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </View>
      </Pressable>
    );
  }
  const styles = StyleSheet.create({
    buttonText: {
      fontWeight: '600',
      fontSize: 16,
      color: 'white',
    },
    button: e => ({
      borderRadius: 5,
      height: 50,
      backgroundColor: e ? '#0C8EFF' : '#9ACAF7',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:30,
    }),
  });