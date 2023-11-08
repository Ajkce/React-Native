import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import { LittleLemonFooter } from "./components/LittleLemonFooter";
import { LittleLemonBody } from "./components/LittleLemonBody";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [courseGoals, setCourseGoals] = useState([
    "First Goal",
    "Second Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
    "First Goal",
  ]);
  const goalInputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((goals) => [...goals, inputValue]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.input}
          placeholder="Your Course goal!"
        ></TextInput>
        <Button onPress={addGoalHandler} title="Add Goals"></Button>
      </View>
      <View style={styles.list}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => (
            <View key={itemData.index} style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    padding: 2,
  },
  list: {
    flex: 5,
  },
  goalItem: {
    color: "white",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
