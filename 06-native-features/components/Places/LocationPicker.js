import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { OutlinedButton } from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export default function LocationPicker({ onPickLocation }) {
  const [pickedlocation, setLocation] = useState();
  //   const verifyPermission = async () => {
  //     if (status.status === PermissionStatus.UNDETERMINED) {
  //       const premissionResponse = await requestPermission;

  //       return premissionResponse.granted;
  //     }
  //     if (status.status === PermissionStatus.DENIED) {
  //       Alert.alert(
  //         "Insuffecient permission",
  //         "You need to grant location permission to use this app"
  //       );
  //       return false;
  //     }
  //     return true;
  //   };

  const getLocationHandler = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Insuffecient permission",
        "You need to grant location permission to use this app"
      );
      return;
    }
    const location = await getCurrentPositionAsync();
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };
  useEffect(() => {
    onPickLocation(pickedlocation);
  }, [pickedlocation, onPickLocation]);
  const openMapHandler = () => {};
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={openMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
