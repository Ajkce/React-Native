import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AddIcon({ color }) {
  const navigation = useNavigation();
  const openEdit = () => {
    navigation.navigate("Edit Expense");
  };
  return (
    <Pressable onPress={openEdit}>
      <View style={styles.container}>
        <Ionicons color={color} size={27}  name="add"></Ionicons>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});
