import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/Auth-context";

function SignupScreen() {
  const { authenticate } = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser({ email, password });
      authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please check your credentials and try again"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User ..."></LoadingOverlay>;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
