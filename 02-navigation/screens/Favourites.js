import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function Favourites() {
  const { favItems } = useSelector((state) => state.favourite);

  const favoriteMeals = MEALS.filter((meal) => favItems.includes(meal.id));
  return (
    <View>
      <FlatList
        data={favoriteMeals}
        renderItem={(itemData) => <MealItem data={itemData.item}></MealItem>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
