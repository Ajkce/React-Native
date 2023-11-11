import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton({ onPress, color, icon }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color}></Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
