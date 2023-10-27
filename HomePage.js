import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

const data = [
  { id: '1', title: 'Apelsin', screen: 'Apelsin' },
  { id: '2', title: 'Banan', screen: 'Banan' },
  { id: '3', title: 'Cider', screen: 'Cider' },
];

export default function HomePage({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      style={styles.box}
    >
      <Text style={styles.boxText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    backgroundColor: "#80ced6",
    borderRadius: 20,
    padding: 20,
    width: 300, // Adjust the width as needed
    marginBottom: 10,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});
