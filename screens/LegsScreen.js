import { FlatList } from 'react-native';
import { Exercise } from '../components/Exercise/Exercise';

import { data } from '../db/db';

export function LegsScreen() {
  return (
    <FlatList
      data={data.exercises.legs}
      renderItem={({ item, index }) => {
        return (
          <Exercise
            title={`${++index}. ${item.title}`}
            img={item.img}
            text={item.text}
          />
        );
      }}
      keyExtractor={(i) => i.id}
      style={{ backgroundColor: '#fff' }}
    />
  );
}
