import { StyleSheet, Text, View } from "react-native";
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

export type RootStackParamList = {
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
      <Tab.Navigator
        tabBar={CustomBottomTabs}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Exchange" component={ExchangeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
