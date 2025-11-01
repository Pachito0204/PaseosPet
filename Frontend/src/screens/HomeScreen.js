import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a PaseosPet</Text>
      <Button title="Iniciar paseo (demo)" onPress={() => navigation.navigate('Walk')} />
      <View style={{ height: 12 }} />
      <Button title="Chat (demo)" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 24 }
});
