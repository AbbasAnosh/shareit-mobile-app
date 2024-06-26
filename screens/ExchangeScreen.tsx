import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import CategorySelector from "../components/BookCategory";
import UIUXDesign from "../components/UIUXDesign";

const ExchangeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginBottom: 70 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Entypo name="chevron-left" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Books</Text>
      </View>
      <View>
        <SearchBar />
        <TouchableOpacity></TouchableOpacity>
      </View>
      <CategorySelector />
      <UIUXDesign />
    </SafeAreaView>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: "#fff",
  },
  iconContainer: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "white",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#4F4A85",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4F4A85",
    textAlign: "center",
    flex: 1,
  },
});
