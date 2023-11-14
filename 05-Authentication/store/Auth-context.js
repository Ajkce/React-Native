import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authtoken, setToken] = useState();

  const authenticate = (token) => {
    setToken(token);
    AsyncStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    AsyncStorage.removeItem("token")
  };

  const value = {
    token: authtoken,
    isAuthenticated: !!authtoken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
