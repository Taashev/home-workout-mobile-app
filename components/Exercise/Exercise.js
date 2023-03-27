import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import defaultImg from '../../assets/images/images.jpeg';

export function Exercise({ title, img, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={img ? img : defaultImg}
        resizeMode="cover"
        style={styles.img}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    marginBottom: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 700,
  },
  img: { width: '100%', height: 150, marginBottom: 10 },
  text: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 22,
  },
});
