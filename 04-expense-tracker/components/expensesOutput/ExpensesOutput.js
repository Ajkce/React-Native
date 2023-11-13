import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Gucci bah",
    amount: 301.53,
    date: new Date("2023-11-10"),
  },
  {
    id: "e3",
    description: "A pair of Trousers",
    amount: 89.99,
    date: new Date("2023-11-7"),
  },
  {
    id: "e4",
    description: "A pair of sunglases",
    amount: 299.99,
    date: new Date("2021-5-19"),
  },
];

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={periodName}
      ></ExpensesSummary>
      <View>
        <ExpenseList expenses={DUMMY_EXPENSES}></ExpenseList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
});
