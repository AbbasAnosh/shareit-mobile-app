import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CategoryButtons = ({ activeCategory, onCategoryPress }) => {
  const handleButtonPress = (category) => {
    onCategoryPress(category.name);
  };

  const categories = [
    {
      name: "Book",
      icon: <AntDesign name="book" size={24} color="black" />,
    },
    {
      name: "Music Instrument",
      icon: <Feather name="music" size={24} color="black" />,
    },
  ];

  return (
    <View style={styles.CategoryButtons}>
      {categories.map((category) => {
        const isActive = activeCategory === category.name;
        const iconColor = isActive ? "white" : "black";
        return (
          <TouchableOpacity
            key={category.name}
            style={[
              styles.CategoryButton,
              isActive ? styles.activeButton : null,
            ]}
            onPress={() => handleButtonPress(category)}
          >
            {React.cloneElement(category.icon, { color: iconColor })}
            <Text style={{ color: iconColor, marginLeft: 10 }}>
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  CategoryButtons: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    gap: 5,
  },
  CategoryButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#8C6EFF",
  },
});

export default CategoryButtons;
