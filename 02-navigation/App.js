import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import MealsDetails from "./screens/MealsDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "./screens/Favourites";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#413733" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#665e58" },
      }}
    >
      <Drawer.Screen name="Categories" component={Categories}></Drawer.Screen>
      <Drawer.Screen name="Favourites" component={Favourites}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

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
            component={DrawerNavigator}
            options={{
              headerShown: false,
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
