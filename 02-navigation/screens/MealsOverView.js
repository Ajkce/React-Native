import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverView() {
  const route = useRoute();
  const catId = route.params.categoryId;
  const navigation = useNavigation();

  const displayMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const catTitle = CATEGORIES.find((category) => (category.id = catId)).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

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
