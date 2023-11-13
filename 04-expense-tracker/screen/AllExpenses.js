import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

export default function AllExpenses() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ExpensesOutput periodName="Total"></ExpensesOutput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
