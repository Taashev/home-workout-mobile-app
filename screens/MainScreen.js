import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Card} from '../components/Card/Card';

export function MainScreen({navigation}) {
  function onNavigation(point) {
    navigation.navigate(point);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Тренеровки</Text>
        <Text style={styles.subtitle}>ДОМА</Text>
        <TouchableOpacity onPress={() => onNavigation('Back')}>
          <Card title="Спина" color="#338309" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Chest')}>
          <Card title="Грудь" color="#C9D46C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Arms')}>
          <Card title="Руки" color="#E48716" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Press')}>
          <Card title="Пресс" color="#FAAB01" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigation('Legs')}>
          <Card title="Ноги" color="#DFBCB2" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD0C4',
    padding: 10,
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
    backgroundColor: 'red',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
});
