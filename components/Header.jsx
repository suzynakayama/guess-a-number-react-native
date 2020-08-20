import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Colors from "../constants/colors"

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{ title }</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 24,
    fontFamily: 'open-sans-bold'
  },
});
