import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import Text from "../components/Text";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => (
  <Modal visible={visible}>
    <View style={styles.container}>
      {progress < 1 ? (
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
      ) : (
        <LottieView
          autoPlay
          loop={false}
          style={styles.animation}
          onAnimationFinish={onDone}
          source={require("../assets/animations/done.json")}
        />
      )}
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
