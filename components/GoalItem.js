import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = ({ itemData, deleteItem }) => {
  return (
    <View style={styles.goalItem} key={itemData.index}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteItem(itemData.index)}
      >
        <Text style={styles.goalText}>{itemData.item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    color: "white",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
