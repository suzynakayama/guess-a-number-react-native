import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from '../constants/colors';

const StyledButton = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default StyledButton

const styles = StyleSheet.create({
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
