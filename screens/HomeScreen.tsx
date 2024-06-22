import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=600",
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10,
              }}
            />

            <View>
              <Text style={styles.profilename}>Hi, Abbas</Text>
              <Text>Good morning</Text>
            </View>
          </View>
          <View style={styles.Icon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  profilename: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  Icon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});
