import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native"
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import DefaultStyles from "../constants/default-styles";
import StyledButton from '../components/StyledButton';

const StartGame = ({ onStartGame }) => {
  let confirmOutput;
  const [selectedNumber, setSelectedNumber] = useState();
  const [enteredValue, setEnteredValue] = useState("");
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get("window").width / 4)

  const handleNumberInput = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, "")); //# replace anything that is not a number to empty string
  };

  const handleResetBtn = () => {
    setEnteredValue("");
    setHasConfirmed(false);
  };

  const handleConfirmBtn = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "Ok", style: "destructive", onPress: handleResetBtn },
      ]);
      return;
    }
    setHasConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  if (hasConfirmed)
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={DefaultStyles.title}>Chosen Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <StyledButton
          onPress={() => onStartGame(selectedNumber)}
        >Start Game</StyledButton>
      </Card>
    );
  
  useEffect(() => {
      const updateLayout = () => {
        setButtonWidth(Dimensions.get("window").width / 4);
      };

    Dimensions.addEventListener("change", updateLayout);
    
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.card}>
              <Text style={DefaultStyles.bodyText}>Select a Number:</Text>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={handleNumberInput}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={buttonWidth}>
                  <Button
                    title="Reset"
                    color={Colors.red}
                    onPress={handleResetBtn}
                  />
                </View>
                <View style={buttonWidth}>
                  <Button
                    color={Colors.primary}
                    title="Confirm"
                    onPress={handleConfirmBtn}
                  />
                </View>
              </View>
            </Card>
            {confirmOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

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
    fontFamily: 'open-sans-bold',
  },
  input: {
    width: 60,
    textAlign: 'center'
  },
  card: {
    width: '80%',
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  // button: {
     // width: 120
  //   width: Dimensions.get('window').width / 4
     // Dimensions is an object that RN offers you to get the size of the window.
  // },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
