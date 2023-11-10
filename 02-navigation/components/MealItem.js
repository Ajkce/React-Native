import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealItem({ data }) {
  const {
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = data;
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image}></Image>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.item}>{duration} m</Text>
          <Text style={styles.item}>{complexity}</Text>
          <Text style={styles.item}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 5,
    overflow: "hidden",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    paddingHorizontal: 60,
    alignItems: "center",
  },
  item: {
    alignContent: "center",
    textAlign: "center",
    color: "#8c877d",
    fontWeight: "500",
  },
});
