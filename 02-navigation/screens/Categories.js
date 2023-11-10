import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategorisGridTile from "../components/CategorisGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategorisGridTile
      title={itemData.item.title}
      color={itemData.item.color}
    ></CategorisGridTile>
  );
}

export default function Categories() {
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
