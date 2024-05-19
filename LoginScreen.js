import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setError('');
    // Simulate an API call for login
    // Replace this with your actual login API call
    if (email === 'seetha.32@example.com' && password === 'seetha1232') {
      navigation.navigate('Home');
    } else {
      setError('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text>Welcome back you've been missed</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate('Signup')}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  socialLoginContainer: {
    marginTop: 20,
  },
  socialButton: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
  },
  socialButtonText: {
    color: '#000',
  },
  signupText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;
