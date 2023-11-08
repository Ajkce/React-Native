import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Little Lemon Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: 90,
    paddingTop: 20,
    textAlign: "center",
   
  },
  text : {
    fontSize: 25,
    fontWeight: "bold"
  }
});
