import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import CarouselBook from "../components/Carousel";
import CategoryButtons from "../components/CategoryButton";
import CategoryScroll from "../components/CategoryScroll";
import Writer from "../components/Writer";

const HomeScreen = () => {
  const [clicked, setCLicked] = useState("");
  const [activeCategory, setActiveCategory] = useState("Books");

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };
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
        <View style={styles.Category}>
          <Text style={styles.CategoryName}>Category</Text>

          <CategoryButtons
            activeCategory={activeCategory}
            onCategoryPress={handleCategoryPress}
          />
        </View>
        <View style={styles.category_container}>
          <CategoryScroll />
        </View>
        <Writer />
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
  Category: { paddingHorizontal: 15, marginBottom: 10 },
  CategoryName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222227",
    marginBottom: 10,
  },
  category_container: {
    paddingHorizontal: 5,
  },
});
