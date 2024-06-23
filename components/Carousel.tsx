import React, { useRef, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, { useSharedValue } from "react-native-reanimated";
import CarouselDot from "./CarouselDot";

const { width: screenWidth } = Dimensions.get("window");

const carouselItems = [
  {
    title: "Call Me by Your Name",
    description: "Call Me by Your Name is a great book to read",
    button: "Buy Now",
    image:
      "https://images.pexels.com/photos/734968/pexels-photo-734968.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Half Girlfriend",
    description: "Call Me by Your Name is a great book to read",
    button: "Buy Now",
    image:
      "https://images.pexels.com/photos/2144299/pexels-photo-2144299.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "The Fault in Our Stars",
    description: "Call Me by Your Name is a great book to read",
    button: "Buy Now",
    image:
      "https://images.pexels.com/photos/2187601/pexels-photo-2187601.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Call Me by Your Name",
    description: "Call Me by Your Name is a great book to read",
    button: "Buy Now",
    image:
      "https://images.pexels.com/photos/734968/pexels-photo-734968.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CarouselBook = () => {
  const x = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.card}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>{item.button}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Special for You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={carouselRef}
        loop
        width={screenWidth}
        height={screenWidth / 1.5}
        autoPlay={true}
        data={carouselItems}
        onProgressChange={(_, absoluteProgress) => {
          x.value = absoluteProgress * screenWidth;
        }}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => renderItem({ item })}
      />
      <View style={styles.paginationContainer}>
        {carouselItems.map((_, index) => (
          <CarouselDot key={index} index={index} x={x} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
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
  itemContainer: {
    backgroundColor: "#CDCBFF",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 25,
    flexDirection: "row",
  },
  image: {
    width: "50%",
    height: 200,
    borderRadius: 8,
    marginRight: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -50,
  },

  infoContainer: {
    alignItems: "center",
    marginTop: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  discountText: {
    fontSize: 16,
    color: "grey",
  },
  button: {
    marginTop: 16,
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: "50%",
  },
  Button: {
    height: 30,
    width: "100%",
    backgroundColor: "#4838D1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  ButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CarouselBook;
