import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver();
    }
  }, [onGameOver, userNumber, currentGuess]);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.box}>
        <Text style={styles.higher}>Higher or Lower</Text>
        <View style={styles.btncontainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    paddingHorizontal: 20,
  },
  box: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 20,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 200 },
    shadowRadius: 67,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  btncontainer: {
    flexDirection: "row",
  },
  btn: {
    width: 100,
  },
  higher: {
    color: "white",
    fontSize: 22,
    marginBottom: 20,
  },
});
