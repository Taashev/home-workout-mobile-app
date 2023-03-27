// import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function Card({ title, color, img }) {
  return (
    <View style={styles.card} backgroundColor={color || 'transparent'}>
      <View style={styles.block} backgroundColor={color || 'transparent'}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image source={img} resizeMode="contain" style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 150,
    marginTop: 10,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
  },
  block: {
    width: '100%',
    height: 30,
    position: 'absolute',
    top: 30,
    left: '-32%',
    zIndex: 1,
    transform: [{ rotate: '-35deg' }],
  },
  text: {
    width: '100%',
    color: '#000',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 800,
    zIndex: 2,
  },
});
