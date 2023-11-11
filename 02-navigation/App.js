import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import MealsDetails from "./screens/MealsDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#413733" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#665e58" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Categories}
            options={{
              title: "Meals Categories",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Meals"
            component={MealsOverView}
            options={({ navigation, route }) => {
              const catId = route.params.categoryId;
              return { title: catId };
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealDetails"
            component={MealsDetails}
            
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
