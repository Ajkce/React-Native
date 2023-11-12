import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/colors";

export default function Recent() {
  return (
    <View style={styles.container}>
      <Text>Recent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
