import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Card } from '../components/Card/Card';

import chestImgPreview from '../assets/images/chest/chestPreview.webp';
import armsPreview from '../assets/images/arms/armsPreview.jpg';
import pressPreview from '../assets/images/press/pressPreview.jpg';
import backPreview from '../assets/images/back/backPreview.jpg';
import legsPreview from '../assets/images/legs/legsPreview.jpg';

export function MainScreen({ navigation }) {
  function onNavigation(point) {
    navigation.navigate(point);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Тренеровки</Text>
        <Text style={styles.subtitle}>ДОМА</Text>
        <TouchableOpacity onPress={() => onNavigation('Back')}>
          <Card title="Спина" color="#535c68" img={backPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Chest')}>
          <Card title="Грудь" color="#E48716" img={chestImgPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Arms')}>
          <Card title="Руки" color="#C9D46C" img={armsPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Press')}>
          <Card title="Пресс" color="#95afc0" img={pressPreview} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Legs')}>
          <Card title="Ноги" color="#DFBCB2" img={legsPreview} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD0C4',
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
