import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function Card({ title, color, img = '#' }) {
  return (
    <View style={styles.card} backgroundColor={color || 'lightblue'}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 120,
    marginTop: 10,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 800,
  },
});
