import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (email === '' || password === '' || confirmPassword === '') {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Implement actual signup functionality here
      // For example, make an API call to register the user
      // If successful:
      navigation.navigate('Home');
      // If error:
      // setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.socialSignup}>
        <Text>Sign up with:</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  socialSignup: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
  },
  loginLink: {
    color: '#1E90FF',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SignupScreen;
