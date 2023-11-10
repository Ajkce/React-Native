import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

export const StartGameScreen = ({ pickNumberHandler }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };
  const resetInput = () => {
    setEnteredValue("");
  };

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //Show alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetInput }]
      );
      return;
    }

    pickNumberHandler(chosenNumber);
  }
  const marginTop = height < 500 ? 50 : 100;
  const marginHorizontal = width > 500 ? 90 : 26;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <View style={styles.textContainer}>
            <Title>Guess My Number</Title>
          </View>
          <View
            style={[styles.container, { marginHorizontal: marginHorizontal }]}
          >
            <Text style={styles.guessTitle}>Enter a number</Text>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredValue}
              onChangeText={numberInputHandler}
            ></TextInput>
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <PrimaryButton text="Reset" onPress={resetInput}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.btn}>
                <PrimaryButton text="confirm" onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

//This will lock in the dimesion value one the app is loaded
const deviceWidth = Dimensions.get("window").width;
const deviceHeignt = Dimensions.get("window").height;
console.log(deviceHeignt);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,

    alignItems: "center",
  },
  textContainer: {
    minWidth: "70%",
    minHeight: "10%",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: deviceHeignt > 800 ? 30 : 16,
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
  guessTitle: {
    color: "white",
    fontSize: 23,
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 8,
  },
  btn: {
    flex: 1,
  },
});
