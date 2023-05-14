import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HabitCard } from '../../src/components/HabitCard';
import { Link,Stack } from 'expo-router';

export default function Home() {
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
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown:true,title:'Mis hábitos'}} />
      <Link href={`/habits/${habit.id}`}>
        <HabitCard name={habit.name} record={habit.record} nextMilestone={habit.nextMilestone} lastHistory={habit.lastHistory}/>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
   },
});
