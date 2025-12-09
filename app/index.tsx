import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { globalStyles, lightColorPalette } from "../theme/styles";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <View style={globalStyles.body}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>¡Bienvenido/a a mi aplicación!</Text>
        <Image
          source={require("../assets/images/welcome.gif")}
          style={styles.image}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.navigate("/portfolio")}
      >
        <Text style={styles.buttonText}>Visita mi portfolio</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcomeContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    marginVertical: 25,
    fontWeight: 600,
    textAlign: "center",
  },
  image: {
    width: "80%",
  },
  button: {
    backgroundColor: lightColorPalette.secondary,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});
