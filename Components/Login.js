import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Login = ({ handleLogin }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email === 'admin' && password === '123') {
      Alert.alert('Đăng nhập thành công')
      navigation.navigate('NavBOT');
    }
    else Alert.alert('Sai email khoặc mật khẩu')
  };

  const handleForget = () => {
    navigation.navigate('Forgot');
  };

  const handleRegister = () =>{
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle-o" size={200} color="#4267B2" style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#888"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForget}>
        <Text style={styles.forgotPasswordButtonText}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleRegister}>
        <Text style={styles.forgotPasswordButtonText}>Chưa có tài khoản?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 24,
    borderRadius: 100,
    alignItems:"center",
    justifyContent:"center"
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    width: 200,
    height: 40,
    backgroundColor: "#4267B2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    marginBottom: 18,
  },
  forgotPasswordButtonText: {
    fontSize: 16,
    color: "#888",
  },
});

export default Login;