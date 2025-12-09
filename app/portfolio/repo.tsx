import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { globalStyles } from "../../theme/styles";
import { githubCard, githubLink } from "../../data/socials";
import Card from "../../components/Card";

const Repo = () => {
  return (
    <View style={globalStyles.body}>
      <Card
        title={githubCard.title}
        imageSource={githubCard.image}
        bodyText={githubCard.description}
      />
      <View style={styles.qrCode}>
        <QRCode value={githubLink} />
      </View>
    </View>
  );
};

export default Repo;

const styles = StyleSheet.create({
  qrCode: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
