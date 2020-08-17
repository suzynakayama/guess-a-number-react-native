import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native"
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.card}>
        <Text>Select a Number:</Text>
        <Input style={ styles.input }
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={ false }
          keyboardType="numeric"
          maxLength={2} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.red}
              onPress={() => console.log("clicked")}
            />
          </View>
          <View>
            <Button
              color={Colors.primary}
              title="Confirm"
              onPress={() => console.log("clicked")}
            />
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGame

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10, //! margin bottom + margin top
  },
  input: {
    width: 60,
    textAlign: 'center'
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 120
  }
});
