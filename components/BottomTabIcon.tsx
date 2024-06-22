import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  route: string;
  isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 20;
    let width: number = 20;

    switch (route) {
      case "Home":
        return (
          <AntDesign
            name="home"
            width={width}
            height={height}
            size={20}
            // fill={isFocused ? "#0067FF" : "#ffffff"}
            color={isFocused ? "#0067FF" : "#ffffff"}
          />
        );
      case "Exchange":
        return (
          <FontAwesome
            name="exchange"
            width={width}
            height={height}
            size={20}
            // fill={isFocused ? "#0067FF" : "#ffffff"}
            color={isFocused ? "#0067FF" : "#ffffff"}
          />
        );
      case "Cart":
        return (
          <AntDesign
            name="shoppingcart"
            width={width}
            height={height}
            size={20}
            // fill={isFocused ? "#0067FF" : "#ffffff"}
            color={isFocused ? "#0067FF" : "#ffffff"}
          />
        );
      case "Profile":
        return (
          <Ionicons
            name="person-outline"
            width={width}
            height={height}
            size={20}
            // fill={isFocused ? "#0067FF" : "#ffffff"}
            color={isFocused ? "#0067FF" : "#ffffff"}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
