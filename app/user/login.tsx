import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import colors from "../../theme/color";
import typography from "../../theme/typography";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={[typography.subheading, styles.title]}>Log In</Text>
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
      {/* <Pressable onPress={submitForm} style={styles.button}>
        <Text style={typography.button}>Register Now!</Text>
      </Pressable> */}
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
});
