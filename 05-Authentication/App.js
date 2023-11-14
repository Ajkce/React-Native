import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import { AuthContext, AuthContextProvider } from "./store/Auth-context";
import { useContext, useEffect, useState } from "react";
import IconButton from "./components/ui/IconButton";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={logout}
            ></IconButton>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { token, isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {token && isAuthenticated ? (
        <AuthenticatedStack></AuthenticatedStack>
      ) : (
        <AuthStack></AuthStack>
      )}
    </NavigationContainer>
  );
}
function Root() {
  const [isLogging, setIsLogging] = useState(true);
  const { authenticate } = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storageToken = await AsyncStorage.getItem("token");
      if (storageToken) {
        authenticate(storageToken);
      }
      setIsLogging(false);
    }
    fetchToken();
  }, []);
  if (isLogging) {
    return <AppLoading></AppLoading>;
  }
  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root></Root>
      </AuthContextProvider>
    </>
  );
}
