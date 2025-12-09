import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles, lightColorPalette } from "../theme/styles";
import { interests } from "../data/about";

const List = () => {
  return (
    <View>
      <Text style={styles.title}>{interests.title}</Text>
      <ScrollView style={styles.scrollContainer}>
        {interests.list.map((item, index) => (
          <Text key={index} style={styles.list}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  title: {
    color: lightColorPalette.text,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  scrollContainer: {
    padding: 10,
  },
  list: {
    borderColor: lightColorPalette.border,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: lightColorPalette.text,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: lightColorPalette.lightGray,
  },
});
