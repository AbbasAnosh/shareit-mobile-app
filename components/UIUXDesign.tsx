import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const UIUXDesign = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>UI/UX Design</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UIUXDesign;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222227",
  },
  seeAllText: {
    color: "blue",
  },
});
