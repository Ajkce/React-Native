import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesItem from "./ExpensesItem";

export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpensesItem item={item}></ExpensesItem>}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
