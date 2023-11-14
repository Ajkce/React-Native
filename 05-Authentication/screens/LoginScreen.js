import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signInUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/Auth-context";

function LoginScreen() {
  const { authenticate } = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signInHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await signInUser({ email, password });
      authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        "Authentication failed, please check your credentails and try again"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging user in ..."></LoadingOverlay>;
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
