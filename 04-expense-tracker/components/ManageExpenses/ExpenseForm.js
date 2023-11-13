import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { GlobalStyles } from "../../styles/colors";

export default function ExpenseForm({ onCancel, onSubmit, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifer, enteredValue) {
    setInputValues((state) => {
      return {
        ...state,
        [inputIdentifer]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputValues((currInput) => {
        return {
          amount: { value: currInput.amount.value, isValid: amountIsValid },
          date: { value: currInput.date.value, isValid: dateIsValid },
          description: {
            value: currInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });

      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputValues.amount.isValid ||
    !inputValues.date.isValid ||
    !inputValues.description.isValid;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputContainer}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
          style={styles.rowInput}
          invalid={!inputValues.amount.isValid}
        ></Input>
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date.value,
          }}
          style={styles.rowInput}
          invalid={!inputValues.date.isValid}
        ></Input>
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description.value,
        }}
        invalid={!inputValues.description.isValid}
      ></Input>
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input Value, Please Check Your Entered Data
        </Text>
      )}
      <View style={styles.btn}>
        <Pressable onPress={onCancel}>
          <View style={styles.cancelbutton}>
            <Text style={styles.cancel}>Cancel</Text>
          </View>
        </Pressable>
        <Pressable onPress={submitHandler}>
          <View style={styles.updatebutton}>
            <Text style={styles.update}>Update</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
