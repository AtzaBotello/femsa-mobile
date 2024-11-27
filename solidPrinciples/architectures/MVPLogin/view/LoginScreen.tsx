import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { LoginView } from "./LoginView";
import { LoginPresenter } from "../presenter/LoginPresenter";
import { UserService } from "../model/UserService";

export const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const userService = new UserService();
  const presenter = new LoginPresenter(
    {
      showSuccessMessage: () => setMessage("Login successful!"),
      showErrorMessage: (error: string) => setMessage(error),
    },
    userService
  );

  const handleLogin = () => {
    presenter.handleLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    color: "green",
  },
});