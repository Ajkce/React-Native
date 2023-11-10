import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverView() {
  const route = useRoute();
  const catId = route.params.categoryId;
  const displayMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View>
      <FlatList
        data={displayMeal}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem data={itemData.item}></MealItem>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
