import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recent from "./screen/Recent";
import AllExpenses from "./screen/AllExpenses";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./styles/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenses from "./screen/ManageExpenses";
import AddIcon from "./components/ui/AddIcon";
import ExpensesContextProvider from "./store/expense-context";

const Tab = createBottomTabNavigator();
const Screen = createNativeStackNavigator();

const ExpenseOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: ({ tintColor }) => <AddIcon color={tintColor}></AddIcon>,
        headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        headerBackgroundContainerStyle: {
          backgroundColor: GlobalStyles.colors.primary800,
        },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tab.Screen
        name="Recent"
        component={Recent}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="timer-outline"></Ionicons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              color={color}
              size={size}
              name="calendar-sharp"
            ></Ionicons>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Screen.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
            headerBackgroundContainerStyle: {
              backgroundColor: GlobalStyles.colors.primary800,
            },
            headerTintColor: "white",
          }}
        >
          <Screen.Screen
            name="Expenses"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          ></Screen.Screen>
          <Screen.Screen
            name="Edit Expense"
            component={ManageExpenses}
          ></Screen.Screen>
        </Screen.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
