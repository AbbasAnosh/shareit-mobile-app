import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { BookCategory } from "../data/BookData";

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(BookCategory[0]);

  return (
    <View style={styles.container}>
      <FlatList
        data={BookCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item)}
            style={styles.categoryContainer}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
            {selectedCategory === item && <View style={styles.underline} />}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 20,
    color: "#555",
  },
  selectedText: {
    color: "#4F4A85",
    fontWeight: "bold",
  },
  underline: {
    height: 2,
    backgroundColor: "#4F4A85",
    marginTop: 4,
    width: "100%",
  },
});

export default CategorySelector;
