import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

export default function CategorisGridTile({ title, color }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          Platform.OS === "ios" && pressed ? styles.btnPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressable: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
