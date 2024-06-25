import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { TopWriter } from "../data/BookData";

const screenWidth = Dimensions.get("window").width;
const Writer = () => {
  return (
    <View style={styles.Wholecontainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Writer</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {TopWriter.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Writer;

const styles = StyleSheet.create({
  Wholecontainer: {
    paddingHorizontal: 15,
  },
  container: {
    marginTop: 20,
  },
  card: {
    width: screenWidth / 3,
    height: screenWidth / 2,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
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
});
