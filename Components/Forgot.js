import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [isCounting, setIsCounting] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleVerificationCodeChange = (text) => {
    setVerificationCode(text);
  };

  const handleResetPassword = () => {
    if(verificationCode == 1234)
    console.log('Yêu cầu đặt lại mật khẩu thành công');
  };

  const handleSendCode = () => {
    setIsCounting(true);
  };

  useEffect(() => {
    let interval = null;

    if (isCounting) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      clearInterval(interval);
      setIsCounting(false);
    }

    return () => clearInterval(interval);
  }, [isCounting, countdown]);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Vui lòng nhập địa chỉ email của bạn để đặt lại mật khẩu.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={email}
      />
        <TextInput
          style={styles.input}
          placeholder="Nhâp mã xác minh được gửi về email"
          onChangeText={handleVerificationCodeChange}
          value={verificationCode}
        />
      {isCounting ? (
        <Text style={styles.countdownText}>{`Mã xác minh đã được gửi. Đợi ${countdown}s để gửi lại`}</Text>
      ) : (
        <TouchableOpacity style={styles.countdownText} onPress={handleSendCode}>
          <Text style={styles.countdownText}>Nhận mã xác minh</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Đặt lại mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#4267B2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 530,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  countdownText: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#4267B2',
  },
});

export default Forgot;