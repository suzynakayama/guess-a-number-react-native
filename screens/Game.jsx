import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from "../constants/colors";
import DefaultStyles from '../constants/default-styles';
import StyledButton from '../components/StyledButton';

const randomNumGenerator = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const random = Math.floor(Math.random() * (max - min)) + min
  if (random === exclude) {
    return randomNumGenerator(min, max, exclude)
  }
  return random
}

const Game = ({ userChoice, onGameOver }) => {
  const initialGuess = randomNumGenerator(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess.toString()])
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const handleNextGuess = direction => {
    if ((direction === 'lower' && currentGuess < userChoice) || ((direction === 'greater' && currentGuess > userChoice))) Alert.alert('Dont\'t lie!', 'You know that his is wrong...', [{ text: 'Sorry!', style: 'default' }])
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    }
    if (direction === 'greater') {
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = randomNumGenerator(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextGuess)
    setRounds(curRounds => [nextGuess.toString(), ...curRounds])
  }

  const renderListItem = (val, numOfRound) => (
    <View key={val} style={styles.listItem}>
      <Text>Round #{numOfRound}</Text>
      <Text>{val}</Text>
    </View>
  );

  useEffect(() => {
    if (currentGuess === userChoice) onGameOver(rounds.length);
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.container}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <StyledButton onPress={() => handleNextGuess("lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </StyledButton>
        <StyledButton onPress={() => handleNextGuess("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </StyledButton>
      </Card>
      <View style={ styles.listContainer }>
        {/* We could use FlatList (optimized scrollable list for very long lists - renders only what user can see) instead of ScrollView (non-optimized scrollable view/container - renders everything) */}
        <ScrollView contentContainerStyle={styles.list}>
          {rounds.map((guess, idx) => {
            let numOfRound = rounds.length - (idx + 1);
            return renderListItem(guess, numOfRound);
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Game

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  listContainer: {
    width: '60%',
    flex: 1
  },
  list: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  listItem: {
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%'
  }
})
