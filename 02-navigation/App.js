import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Categories></Categories>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
