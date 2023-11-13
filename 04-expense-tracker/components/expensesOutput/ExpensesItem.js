import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../styles/colors";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesItem({ item }) {
  const navigation = useNavigation();
  const openEdit = () => {
    navigation.navigate("Edit Expense", {
      expenseId: item.id,
    });
  };
  return (
    <Pressable onPress={openEdit}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.date}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.amount}>${item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 7,
    padding: 10,
    borderRadius: 7,
  },
  description: {
    color: GlobalStyles.colors.primary50,
    fontWeight: "500",
    marginBottom: 10,
  },
  date: {
    color: GlobalStyles.colors.primary50,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  right: {
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 4,
  },
});
