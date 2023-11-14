import { createContext, useState } from "react";

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
  };

  const logout = () => {
    setToken(null);
  };

  const value = {
    token: authtoken,
    isAuthenticated: !!authtoken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
