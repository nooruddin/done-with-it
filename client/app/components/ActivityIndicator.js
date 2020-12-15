import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    zIndex: 1,
    opacity: 0.8,
  },
});

export default ActivityIndicator;
