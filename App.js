import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.bg}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        <StatusBar style="light"></StatusBar>
        <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.2,
  },
});
