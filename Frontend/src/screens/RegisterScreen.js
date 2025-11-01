import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API from '../services/api';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('Usuario Demo');
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('123456');

  const onRegister = async () => {
    try {
      await API.post('/auth/register', { name, email, password });
      Alert.alert('Listo', 'Cuenta creada. Inicia sesión');
      navigation.replace('Login');
    } catch (e) {
      Alert.alert('Error', 'No se pudo crear la cuenta');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <TextInput style={styles.input} placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Registrar" onPress={onRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12 }
});
