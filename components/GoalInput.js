import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Modal } from "react-native";

export const GoalInput = ({ addGoalHandler, isModalOpen, modalHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const goalInputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.input}
          placeholder="Your Course goal!"
          value={inputValue}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addGoalHandler(inputValue);
                setInputValue("");
              }}
              title="Add Goals"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                modalHandler();
              }}
              title="Cancel"
              color="red"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    paddingHorizontal: 8,
    padding: 2,
  },
  list: {
    flex: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
