import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <TextInput
          style={styles.input}
          placeholder="Search your ..."
          //   value={searchPhrase}
          //   onChangeText={setSearchPhrase}
          onFocus={() => {
            setCLicked(true);
          }}
        />
      </View>
      <View style={styles.search_Icon}>
        <Feather name="search" size={20} color="white" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  searchBar__unclicked: {
    padding: 15,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 50,
    alignItems: "center",
    position: "relative",
  },
  searchBar__clicked: {
    padding: 15,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  search_Icon: {
    width: 60,
    height: 60,
    backgroundColor: "#4838D1",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -2,
    zIndex: 10,
  },
});
