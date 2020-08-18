import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';        //! prolong the loading screen until you finish certain task
import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

//# Fetch the fonts
const fetchFonts = () => {
  //# loadAsync return a promise
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [userNum, setUserNum] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={ () => setFontLoaded(true) }
        onError={(err) => console.log(err)} // TODO: do something with err
      />
    );

  const configNewGame = () => {
    setGuessRounds(0)
    setUserNum(null)
  }

  const handleStartGame = (selectedNum) => {
    setUserNum(selectedNum)
  };

  const handleGameOver = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGame onStartGame={ handleStartGame }/>;

  if (userNum && guessRounds <= 0) content = <Game userChoice={ userNum } onGameOver={ handleGameOver } />;
  
  if (guessRounds > 0) content = <GameOver rounds={ guessRounds } userNum={ userNum } onRestart={ configNewGame }/>
  
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
