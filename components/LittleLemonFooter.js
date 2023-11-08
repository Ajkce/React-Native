import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const LittleLemonFooter = () => {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        marginBottom: 10,
        position: "absolute",
        bottom: 0,
        
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
