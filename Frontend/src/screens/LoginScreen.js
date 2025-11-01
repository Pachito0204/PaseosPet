import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API, { setAuthToken } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('123456');

  const onLogin = async () => {
    try {
      const { data } = await API.post('/auth/login', { email, password });
      setAuthToken(data.access_token);
      navigation.replace('Home', { token: data.access_token });
    } catch (e) {
      Alert.alert('Error', 'No se pudo iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PaseosPet</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Entrar" onPress={onLogin} />
      <Text style={{marginTop: 16}} onPress={() => navigation.navigate('Register')}>Crear cuenta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12 }
});
