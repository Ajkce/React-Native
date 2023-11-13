import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../styles/colors";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { ExpenseContext } from "../store/expense-context";

export default function ManageExpenses() {
  const navigation = useNavigation();
  const route = useRoute();
  const expenseId = route.params?.expenseId;
  console.log(expenseId);
  const isEditing = !!expenseId;
  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpenseContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cencelExpenses = () => {
    navigation.goBack();
  };
  const editExpenses = () => {
    if (isEditing) {
      updateExpense(expenseId, {
        description: "Nex expense",
        amount: 20.99,
        date: new Date(),
      });
    } else {
      addExpense({
        description: "Nex expense",
        amount: 20.99,
        date: new Date(),
      });
    }
    navigation.goBack();
  };
  const deleteExpenses = () => {
    deleteExpense(expenseId);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Pressable onPress={cencelExpenses}>
          <View style={styles.cancelbutton}>
            <Text style={styles.cancel}>Cancel</Text>
          </View>
        </Pressable>
        <Pressable onPress={editExpenses}>
          <View style={styles.updatebutton}>
            <Text style={styles.update}>Update</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.trashBtn}>
        <Pressable onPress={deleteExpenses}>
          <Ionicons
            color={GlobalStyles.colors.error500}
            size={36}
            name="trash"
          ></Ionicons>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 20,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    borderBottomColor: GlobalStyles.colors.primary100,
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  updatebutton: {
    backgroundColor: GlobalStyles.colors.primary400,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
  },
  cancelbutton: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
  },
  update: {
    color: "white",
  },
  cancel: {
    color: GlobalStyles.colors.primary100,
  },
  trashBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
