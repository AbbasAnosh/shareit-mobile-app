import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import CarouselComponent from "../components/Carousel";
import CarouselBook from "../components/Carousel";

const HomeScreen = () => {
  const [clicked, setCLicked] = useState("");
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

        <SearchBar setCLicked={setCLicked} clicked={clicked} />
        <CarouselBook />
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
    paddingVertical: 10,
    paddingHorizontal: 15,
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
