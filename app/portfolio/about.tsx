import { StyleSheet, View } from "react-native";
import React from "react";
import { globalStyles } from "../../theme/styles";
import List from "../../components/List";

export default function About() {
  return (
    <View style={globalStyles.body}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({});
