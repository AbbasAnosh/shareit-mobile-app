import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";

export type OnboardingProps = {
  Onboarding: undefined;
};

const SplashScreen = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const animation = useRef(null);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "Onboarding">
    >();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldNavigate(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate("Onboarding");
    }
  }, [shouldNavigate, navigation]);

  return (
    <View style={styles.container}>
      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9,
          }}
          source={require("../assets/animations/Lottie1.json")}
        />
      </View>
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
