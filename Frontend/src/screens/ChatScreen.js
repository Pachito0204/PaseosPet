import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    setMessages(prev => [{ id: Date.now().toString(), text }, ...prev]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat (demo local)</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Escribe un mensaje" value={text} onChangeText={setText} />
        <Button title="Enviar" onPress={send} />
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.msg}>• {item.text}</Text>}
        inverted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16, paddingTop: 48 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  inputRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10 },
  msg: { paddingVertical: 6, fontSize: 16 }
});
