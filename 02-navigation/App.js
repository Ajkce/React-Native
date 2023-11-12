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
import { Ionicons } from "@expo/vector-icons";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#413733" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#665e58" },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e2c6b9",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list"></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="heart"></Ionicons>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
