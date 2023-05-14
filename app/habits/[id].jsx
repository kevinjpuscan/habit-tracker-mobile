import { Stack, useSearchParams, Link } from 'expo-router';
import {View, StyleSheet} from 'react-native';
import colors from '../../src/theme/colors';
import { HeaderHabitDetail } from '../../src/components/HeaderHabitDetail';

export default function Test(){
  const {id} = useSearchParams();

  const habit = {
    id: 1,
    name: 'Hace ejercicio',
    record: 75,
    nextMilestone: 100,
    lastHistory: [
      { date: new Date(), type: 'completed' },
      { date: new Date('2023-05-12'), type: 'completed' },
      { date: new Date('2023-05-11'), type: 'completed' },
      { date: new Date('2023-05-8'), type: 'failed' },
      { date: new Date('2023-05-6'), type: 'completed' },
      { date: new Date('2023-05-3'), type: 'completed' },
      { date: new Date('2023-05-2'), type: 'completed' },
    ],
  }
  return <View>
    <Stack.Screen options={{headerShown:false}} />
    <HeaderHabitDetail name={habit.name} record={habit.record} nextMilestone={habit.nextMilestone} />
    <Link href={`/habits`}>Volver</Link>
  </View>;
}
const primary=colors.primary;
const secondary=colors.secondary;
const styles = StyleSheet.create({

});
