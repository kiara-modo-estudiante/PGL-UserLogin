import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../theme/color";
import typography from "../theme/typography";
import { validateEmail, validatePassword } from "../utils/inputValidation";
import { loginUser } from "../services/api";
import { useRouter } from "expo-router";
import { saveToken } from "../services/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPassword] = useState("");
  const router = useRouter();

  async function submitForm(): Promise<void> {
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      Alert.alert("Error", emailValidation.message);
      return;
    }

    const passwordValidation = validatePassword(pswd);
    if (!passwordValidation.isValid) {
      Alert.alert("Error", passwordValidation.message);
      return;
    }

    const response = await loginUser(email, pswd);

    if (!response.isValid) {
      Alert.alert("Error", response.message);
    } else {
      try {
        if (response.token) {
          await saveToken(response.token);
          console.debug(response.token);
        }
        Alert.alert("Éxito", response.message);
        router.replace("/(drawer)/welcome");
      } catch (error) {
        Alert.alert("Error", "No se pudo guardar el token.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[typography.subheading, styles.title]}>
        Inicio de Sesión
      </Text>
      <View style={styles.inputField}>
        <Text style={typography.label}>Email: </Text>
        <TextInput
          placeholder="pepe@email.es"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputField}>
        <Text style={typography.label}>Contraseña: </Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={pswd}
          onChangeText={setPassword}
        />
      </View>
      <Pressable onPress={submitForm} style={styles.button}>
        <Text style={typography.button}>Iniciar sesión</Text>
      </Pressable>
      <View style={styles.registerContainer}>
        <Text style={typography.label}>¿No tiene una cuenta?</Text>
        <Text
          style={styles.registerLink}
          onPress={() => router.push("/register")}
        >
          Regístrate
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.secondaryBackground,
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  title: {
    textAlign: "center",
  },
  inputField: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.secondaryText,
    borderRadius: 10,
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: colors.buttonBackground,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    width: 150,
    alignSelf: "center",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerLink: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 500,
    color: "blue",
    textDecorationLine: "underline",
  },
});
