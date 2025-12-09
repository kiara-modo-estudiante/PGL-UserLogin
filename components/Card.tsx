import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { lightColorPalette } from "../theme/styles";
import { CardItem } from "../types/card";

const Card: React.FC<CardItem> = ({ title, imageSource, bodyText }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={imageSource} />
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text>{bodyText}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  card: {
    margin: 10,
    backgroundColor: lightColorPalette.secondary,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
