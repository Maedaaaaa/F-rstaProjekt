import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.greenArea}>
        <Text style={styles.nameText}>Ditt Namn</Text>
      </View>
      <View style={styles.redArea}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Skriv något här" />
          <Button title="Skicka" onPress={() => alert('Skicka klickad')} />
        </View>
        <Text style={styles.bottomText}>Botten</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenArea: {
    flex: 0.2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    color: 'white',
  },
  redArea: {
    flex: 0.8,
    backgroundColor: 'red',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 0.8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  bottomText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
