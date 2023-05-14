import { StyleSheet, View , ScrollView} from 'react-native';
import { HabitCard } from '../../src/components/HabitCard';
import { Link } from 'expo-router';

const habits = [{
  id: 1,
  name: 'Hace ejercicio',
  record: 75,
  nextMilestone: 100,
  lastHistory: [
    { date: new Date(), type: 'completed' },
    { date: new Date('2023-05-12'), type: 'completed' },
    { date: new Date('2023-05-11'), type: 'completed' },
    { date: new Date('2023-05-8'), type: 'completed' },
    { date: new Date('2023-05-6'), type: 'completed' },
    { date: new Date('2023-05-3'), type: 'completed' },
    { date: new Date('2023-05-2'), type: 'completed' },
  ],
},
{
  id: 2,
  name: 'Avanzar side project',
  record: 4,
  nextMilestone: 10,
  lastHistory: [
    { date: new Date(), type: 'completed' },
    { date: new Date('2023-05-12'), type: 'completed' },
    { date: new Date('2023-05-11'), type: 'failed' },
    { date: new Date('2023-05-8'), type: 'completed' },
    { date: new Date('2023-05-6'), type: 'completed' },
    { date: new Date('2023-05-3'), type: 'completed' },
    { date: new Date('2023-05-2'), type: 'completed' },
  ],
},
{
  id: 3,
  name: 'Tender la cama',
  record: 35,
  nextMilestone: 50,
  lastHistory: [
    { date: new Date(), type: 'completed' },
    { date: new Date('2023-05-12'), type: 'completed' },
    { date: new Date('2023-05-11'), type: 'completed' },
    { date: new Date('2023-05-8'), type: 'completed' },
    { date: new Date('2023-05-6'), type: 'completed' },
    { date: new Date('2023-05-3'), type: 'completed' },
    { date: new Date('2023-05-2'), type: 'completed' },
  ],
},
]

export function HabitsList(){
  return  <ScrollView>
  <View style={styles.container}> 
  {habits.map(habit => (
    <Link href={`/habits/${habit.id}`}>
      <HabitCard name={habit.name} record={habit.record} nextMilestone={habit.nextMilestone} lastHistory={habit.lastHistory}/>
    </Link>
  ))}
  </View>
</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap:16,
    minHeight: 600,
   },
});
