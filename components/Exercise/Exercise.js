import {Image, StyleSheet, Text, View} from 'react-native';

export function Exercise({title, img, text}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/* <Image source={require(img)} /> */}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 700,
  },
  text: {},
});
