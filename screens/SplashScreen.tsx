import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.share}>Share</Text>
        <Text style={styles.it}>it.</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4838D1",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
  share: {
    color: "#BEB9E7",
  },
  it: {
    color: "white",
  },
});
