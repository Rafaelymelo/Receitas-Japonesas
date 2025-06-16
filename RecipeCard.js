import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ea4c0e',
    padding: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#422004',
    marginTop: 5,
  },
});
