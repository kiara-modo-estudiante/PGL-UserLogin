import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import typography from "../theme/typography";
import colors from "../theme/color";
import { validateEmail, validatePassword } from "../utils/inputValidation";
import { registerUser } from "../services/api";
import { useRouter } from "expo-router";

const Register = () => {
  const [fullname, setFullName] = useState("");
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

    registerUser(fullname, email, pswd);
  }

  return (
    <View style={styles.container}>
      <Text style={[typography.subheading, styles.title]}>Registro</Text>
      <View style={styles.inputField}>
        <Text style={typography.label}>Nombre Completo: </Text>
        <TextInput
          placeholder="Pepe Benavente"
          style={styles.input}
          value={fullname}
          onChangeText={setFullName}
        />
      </View>
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
        <Text style={typography.button}>Regístrate</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/login")} style={styles.button}>
        <Text style={typography.button}>Ya tengo una cuenta</Text>
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
    marginBottom: 10,
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
    marginBottom: 10,
  },
});
