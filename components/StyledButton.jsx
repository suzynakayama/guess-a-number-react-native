import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import Colors from '../constants/colors';

const StyledButton = ({ onPress, children }) => {
  let ButtonComponent = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) ButtonComponent = TouchableNativeFeedback

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

export default StyledButton

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  }
})
