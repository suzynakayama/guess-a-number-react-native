import React from 'react'
import { View, StyleSheet } from "react-native"
import Colors from "../constants/colors"

const Card = ({ children, style }) => (
  <View style={ { ...styles.inputContainer, ...style } }>
    { children }
  </View>
);

export default Card

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: Colors.white,
    elevation: 6, //! For shadow on android
    padding: 20,
    borderRadius: 10,
  },
});