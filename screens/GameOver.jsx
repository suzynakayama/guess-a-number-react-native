import React from 'react'
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";
import StyledButton from '../components/StyledButton';

const GameOver = ({rounds, userNum, onRestart}) => {
  return (
    <View style={styles.container}>
      <Text style={DefaultStyles.title}>Game Over!</Text>
      <View style={styles.imageContainer}>
        {/* //! Load Local Images! You can set the width and height.
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        /> */}
        {/* For Network Images! Always need to set the width and heigh! */}
        <Image
          source={{
            uri:
              "https://static1.squarespace.com/static/5852ea705016e1d1bb27a876/58644937197aea2b44e9a28d/5cc8a50e426d9e00017237e1/1569868526563/Victory+blank.jpg?format=1500w",
          }}
          fadeDuration={200} //! Time the image takes to fade in ms - default is 300
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{...DefaultStyles.bodyText, ...styles.text}}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNum}</Text>.
        </Text>
      </View>
      <StyledButton onPress={onRestart}>NEW GAME</StyledButton>
    </View>
  );
}

export default GameOver

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: Colors.black,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    marginLeft: 0,
  },
  resultContainer: {
    marginHorizontal: 50,
    marginVertical: 25
  },
  text: {
    textAlign: "center",
    fontSize: 16
  },
  highlight: {
    color: Colors.red,
    fontFamily: "open-sans-bold",
  },
});