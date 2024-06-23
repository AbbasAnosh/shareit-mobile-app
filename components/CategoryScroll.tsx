import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { BookData } from "../data/BookData";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesome key={i} name="star" style={styles.star} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FontAwesome key={i} name="star-half" style={styles.star} />);
    } else {
      stars.push(<FontAwesome key={i} name="star-o" style={styles.star} />);
    }
  }
  return <View style={styles.starContainer}>{stars}</View>;
};

const CategoryScroll = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={BookData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tipCard}>
            <Image source={{ uri: item.image }} style={styles.tipImage} />
            <View style={styles.description}>
              <Text style={styles.tipTitle}>{item.name}</Text>
              <Text style={styles.tipText}>by {item.author}</Text>
              <View>
                {" "}
                <StarRating rating={item.rating} />
                <Text style={styles.ratingText}>({item.rating})</Text>
              </View>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.tipsContainer}
      />
    </View>
  );
};

export default CategoryScroll;

const styles = StyleSheet.create({
  tipsContainer: {
    marginVertical: 20,
  },
  tipCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    flexDirection: "row",
    width: 370,
    height: 150,
    elevation: 3, // Add shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  tipImage: {
    width: 90,
    height: "100%",
  },
  description: {
    padding: 10,
    justifyContent: "center",
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  tipText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 16, // Adjust the size of the star here
    color: "#FFD700", // Gold color
    marginRight: 2,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
    color: "#555",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
});
