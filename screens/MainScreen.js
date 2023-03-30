import { useCallback } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Card } from '../components/Card/Card';

import backPreview from '../assets/images/back/backPreview.jpg';
import breastPreview from '../assets/images/breast/breastPreview.webp';
import handsPreview from '../assets/images/hands/handsPreview.jpg';
import absPreview from '../assets/images/abs/absPreview.jpg';
import legsPreview from '../assets/images/legs/legsPreview.jpg';

export function MainScreen({ navigation }) {
  const onNavigation = useCallback((point) => {
    navigation.navigate(point);
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Workout</Text>
        <Text style={styles.subtitle}>Home</Text>
        <TouchableOpacity onPress={() => onNavigation('Back')}>
          <Card title="Back" color="#535c68" img={backPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Breast')}>
          <Card title="Breast" color="#E48716" img={breastPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Hands')}>
          <Card title="Hands" color="#C9D46C" img={handsPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Abs')}>
          <Card title="Abs" color="#95afc0" img={absPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Legs')}>
          <Card title="Legs" color="#DFBCB2" img={legsPreview} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
    paddingTop: 10,
  },
  subtitle: {
    width: 130,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#130f40',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
});
