import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";

export default function ImagePicker({ onTakeImage }) {
  const [status, requestPermission] = useCameraPermissions();
  const [imageUrl, setImageUrl] = useState();

  const verifyPermission = async () => {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const premissionResponse = await requestPermission;

      return premissionResponse.granted;
    }
    if (status.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insuffecient permission",
        "You need to grant camera permission to use this app"
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const permissionStatus = await verifyPermission();
    if (!permissionStatus) {
      return;
    }
    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    setImageUrl(result.assets[0].uri);
    onTakeImage(result.assets[0].uri);
  };
  let imagePreview = <Text>No image taken yer</Text>;
  if (imageUrl) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: imageUrl }}></Image>
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
