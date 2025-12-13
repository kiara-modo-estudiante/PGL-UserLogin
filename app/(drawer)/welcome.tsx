import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { globalStyles, lightColorPalette } from "../../theme/styles";
import { useRouter } from "expo-router";
import { removeToken } from "../../services/storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../theme/color";

const Home = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await removeToken();
    router.replace("/login");
  };

  return (
    <View style={globalStyles.body}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>¡Bienvenido/a a mi aplicación!</Text>
        <Image
          source={require("../../assets/images/welcome.gif")}
          style={styles.image}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.navigate("/portfolio")}
      >
        <Text style={styles.buttonText}>Visita mi portfolio</Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <MaterialCommunityIcons
          name="exit-to-app"
          size={24}
          style={styles.logoutIcon}
        />
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
  logoutButton: {
    position: "absolute",
    bottom: 0,
    right: 20,
    backgroundColor: colors.warning,
    color: colors.secondaryText,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  logoutIcon: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
