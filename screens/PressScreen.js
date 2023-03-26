import { View, FlatList } from 'react-native';
import { Exercise } from '../components/Exercise/Exercise';

import { data } from '../db/db';

export function PressScreen({ navigation }) {
  return (
    <FlatList
      data={data}
      renderItem={(item) => {
        console.log(item);
        return <Exercise title={item.title} img={item.img} />;
      }}
      keyExtractor={(i, index) => index}
    />
  );
}
