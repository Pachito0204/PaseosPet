import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function WalkScreen() {
  const [coords, setCoords] = useState([]);
  const [watcher, setWatcher] = useState(null);
  const [started, setStarted] = useState(false);

  const startWalk = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    setStarted(true);
    const sub = await Location.watchPositionAsync(
      { accuracy: Location.Accuracy.Balanced, timeInterval: 5000, distanceInterval: 5 },
      (loc) => setCoords(prev => [...prev, { lat: loc.coords.latitude, lng: loc.coords.longitude, ts: Date.now() }])
    );
    setWatcher(sub);
  };

  const stopWalk = () => {
    watcher && watcher.remove();
    setWatcher(null);
    setStarted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paseo en tiempo real (demo)</Text>
      <Text>Lecturas registradas: {coords.length}</Text>
      {!started ? <Button title="Iniciar paseo" onPress={startWalk} /> : <Button title="Finalizar paseo" onPress={stopWalk} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 24 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 16 }
});
