import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";
import { ExpenseContext } from "../../store/expense-context";

export default function ExpensesOutput({ expenses, periodName, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses}></ExpenseList>;
  }
  return (
    <View>
      <ExpensesSummary
        expenses={expenses}
        periodName={periodName}
      ></ExpensesSummary>
      <View>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
