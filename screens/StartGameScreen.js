import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <PrimaryButton text="Reset">Reset</PrimaryButton>
        </View>
        <View style={styles.btn}>
          <PrimaryButton text="confirm">Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 200 },
    shadowRadius: 67,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
