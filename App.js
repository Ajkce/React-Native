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
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [openModal, setIsModelOpen] = useState(false);
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

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((goals) => [...goals, enteredGoalText]);
    modalHandler();
  };

  const deleteGoalItem = (id) => {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((item, index) => index !== id)
    );
  };

  const modalHandler = () => {
    setIsModelOpen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Button
          title="Add new goal"
          color="green"
          onPress={modalHandler}
        ></Button>
      </View>

      <GoalInput
        addGoalHandler={addGoalHandler}
        isModalOpen={openModal}
        modalHandler={modalHandler}
      ></GoalInput>

      <View style={styles.list}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              deleteItem={deleteGoalItem}
            ></GoalItem>
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
  buttonView: {
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: "#cccccc",
  },
});
