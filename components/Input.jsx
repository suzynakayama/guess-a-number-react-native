import React from 'react'
import { TextInput, StyleSheet } from "react-native";
import colors from '../constants/colors';

const Input = (props) => (<TextInput {...props} style={{ ...styles.input, ...props.style }} />)

export default Input

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.black,
    borderBottomWidth: 1.5,
    marginVertical: 10
  }
})