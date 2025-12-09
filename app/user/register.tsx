import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import typography from "../../theme/typography";
import colors from "../../theme/color";
import { validateEmail, validatePassword } from "../../utils/inputValidation";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPassword] = useState("");

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

    try {
      const response = await fetch("http://172.20.10.2:5001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          pswd,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      Alert.alert("Éxito", "Registro exitoso.");
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.message ||
          "No se pudo completar el registro. Inténtalo de nuevo más tarde."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[typography.subheading, styles.title]}>Register</Text>
      <View style={styles.inputField}>
        <Text style={typography.label}>Full Name: </Text>
        <TextInput
          placeholder="Pepe Benavente"
          style={styles.input}
          value={fullname}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.inputField}>
        <Text style={typography.label}>Email address: </Text>
        <TextInput
          placeholder="pepe@email.es"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputField}>
        <Text style={typography.label}>Password: </Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={pswd}
          onChangeText={setPassword}
        />
      </View>
      <Pressable onPress={submitForm} style={styles.button}>
        <Text style={typography.button}>Register Now!</Text>
      </Pressable>
    </View>
  );
};

export default Register;

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
});
