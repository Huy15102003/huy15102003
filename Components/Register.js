import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [againpassword, setAgainpassword] = useState("");
  const [verification, setVerification] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handAgainpassword = (text) => {
    setAgainpassword(text);
  };

  const handleVerificationChange = () => {
    setVerification(!verification);
  };

  const handleRegister = () => {
    if (password == againpassword && verification == true) {
      Alert.alert("Đăng ký thành công");
    }
    else Alert.alert("Đăng ký không thành công");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng bạn đến với Coffee Shop</Text>
      <TextInput
        style={styles.input}
        placeholder="Email hoặc số điện thoại"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        onChangeText={handAgainpassword}
        value={againpassword}
        secureTextEntry
      />
      <View style={styles.verificationContainer}>
        <TouchableOpacity onPress={handleVerificationChange}>
          {verification ? (
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={24}
              color="#4267B2"
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color="#4267B2"
            />
          )}
        </TouchableOpacity>
        <Text style={styles.verificationText}>Tôi không phải người máy</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký ngay</Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#4267B2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 500,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  verificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  verificationText: {
    fontSize: 16,
    color: "#4267B2",
  },
});

export default Register;
