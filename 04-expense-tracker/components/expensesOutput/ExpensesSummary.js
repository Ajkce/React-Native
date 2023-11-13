import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../styles/colors";

export default function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.amount}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 25,
    padding: 10,
    borderRadius: 5,
  },
  period: {
    color: GlobalStyles.colors.primary400,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
