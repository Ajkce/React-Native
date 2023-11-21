import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/little-lemon-logo.png";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.

  const onNavigate = () => {
    navigation.navigate("Subscribe");
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Logo}></Image>
        </View>
        <Text style={styles.text}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          android_ripple={{ color: "white" }}
          onPress={onNavigate}
        >
          <Text style={styles.newsletter}>NewsLetter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
  secondContainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 50,
    textAlign: "center",
    paddingVertical: 30,
    color: "#08502e",
  },
  btnContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#08502e",
    color: "white",
    paddingHorizontal: 100,
    paddingVertical: 14,
    borderRadius: 5,
  },
  newsletter: {
    color: "white",
    fontSize: 17,
  },
});
