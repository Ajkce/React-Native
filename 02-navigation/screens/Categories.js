import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategorisGridTile from "../components/CategorisGridTile";

export default function Categories({ navigation }) {
  function renderCategoryItem(itemData) {
    const pressHandler = () => {
      navigation.navigate("Meals", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategorisGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      ></CategorisGridTile>
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
