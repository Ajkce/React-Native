import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/colors";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

export default function Recent() {
  return (
    <View style={styles.container}>
      <ExpensesOutput periodName="Last 7 Days"></ExpensesOutput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    color: "white",
  },
});
