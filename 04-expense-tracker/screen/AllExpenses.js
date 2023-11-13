import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { GlobalStyles } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

export default function AllExpenses() {
  const navigation = useNavigation();
  const { expenses } = useContext(ExpenseContext);
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expenses}
        periodName="Total"
        fallbackText="No registered expenses found"
      ></ExpensesOutput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
