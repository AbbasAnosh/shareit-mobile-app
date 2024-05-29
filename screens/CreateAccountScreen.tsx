import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { RootStackParamList } from "../RootNavigator";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const CIRCLE_DIAMETER = SCREEN_WIDTH * 2;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Login">>();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topContainer}>
          <View style={styles.title}>
            <Text style={styles.text}>
              <Text style={styles.share}>Share</Text>
              <Text style={styles.it}>it.</Text>
            </Text>
          </View>
          <View style={styles.circleContainer}>
            <View
              style={[
                styles.circle,
                {
                  width: CIRCLE_DIAMETER,
                  height: CIRCLE_DIAMETER,
                  borderRadius: CIRCLE_DIAMETER / 2,
                  top: -CIRCLE_DIAMETER * 0.65,
                  left: -SCREEN_WIDTH / 2,
                },
              ]}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.loginText}>Create Account</Text>
          <View style={styles.googleContainer}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/images/google.png")}
            />
            <Text style={styles.gooleText}>Continue with Google</Text>
          </View>
          <Text>OR</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            Have an account?{" "}
            <Text
              style={styles.registerLink}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    position: "absolute",
    top: "35%",
    zIndex: 10,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  circle: {
    backgroundColor: "#4a4af7",
    position: "absolute",
  },
  bottomContainer: {
    flex: 1,
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  loginText: {
    fontSize: 24,
    color: "#4a4af7",
    marginBottom: 20,
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  googleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
    padding: 10,
    borderRadius: 50,
    width: "100%",
  },
  gooleText: {
    marginLeft: 50,
    color: "#CBCBCB",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
  },
  rememberMeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  rememberMeText: {
    color: "black",
  },
  forgotPasswordText: {
    color: "#4a4af7",
  },
  loginButton: {
    width: "100%",
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#4a4af7",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "semibold",
  },
  orLoginWithText: {
    marginBottom: 20,
    color: "black",
    fontSize: 16,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 20,
  },
  socialIcon: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  registerText: {
    color: "black",
  },
  registerLink: {
    color: "#4a4af7",
  },
  text: {
    fontSize: 28,
    fontWeight: "semibold",
  },
  share: {
    color: "#BEB9E7",
  },
  it: {
    color: "white",
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
});
