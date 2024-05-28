import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type OnboardingProps = {
  Onboarding: undefined;
};

const SplashScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "Onboarding">
    >();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldNavigate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate("Onboarding");
    }
  }, [shouldNavigate, navigation]);

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
