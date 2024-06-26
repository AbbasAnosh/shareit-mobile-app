import { StyleSheet } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ExchangeScreen from "./screens/ExchangeScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import CustomBottomTab from "./components/CustomBottomTab";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/CreateAccountScreen";
import { AntDesign } from "@expo/vector-icons";

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Exchange: undefined;
  Cart: undefined;
  Profile: undefined;
  Main: undefined;
};

const RoootNavigator = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const CustomBottomTabs = (props: BottomTabBarProps) => {
    return <CustomBottomTab {...props} />;
  };

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator tabBar={CustomBottomTabs}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Exchange"
          component={ExchangeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoootNavigator;

const styles = StyleSheet.create({});
