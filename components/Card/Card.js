import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function Card() {
  return (
    <View style={styles.card}>
      {/* <Image style={styles.img} source={require('../../images/volga.jpg')} /> */}
      <Text style={styles.text}>Пресс</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 120,
    backgroundColor: 'lightblue',
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
