import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../styles/colors";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function ManageExpenses() {
  const navigation = useNavigation();
  const route = useRoute();
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cencelExpense = () => {
    navigation.goBack();
  };
  const editExpense = () => {
    navigation.goBack();
  };
  const deleteExpense = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Pressable onPress={cencelExpense}>
          <View style={styles.cancelbutton}>
            <Text style={styles.cancel}>Cancel</Text>
          </View>
        </Pressable>
        <Pressable onPress={editExpense}>
          <View style={styles.updatebutton}>
            <Text style={styles.update}>Update</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.trashBtn}>
        <Pressable onPress={deleteExpense}>
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
