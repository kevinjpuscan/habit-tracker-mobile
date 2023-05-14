import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Title } from '../src/design-system/Title';
import { HabitCard } from '../src/components/HabitCard';

export default function App() {
  const habit = {
    id: 1,
    name: 'Hace ejercicio',
    record: 75,
    nextMilestone: 100,
    lastHistory: [
      { date: new Date(), type: 'completed' },
      { date: new Date('2023-05-12'), type: 'completed' },
      { date: new Date('2023-05-10'), type: 'completed' },
      { date: new Date('2023-05-8'), type: 'failed' },
      { date: new Date('2023-05-6'), type: 'completed' },
      { date: new Date('2023-05-3'), type: 'completed' },
      { date: new Date('2023-05-2'), type: 'completed' },
    ],
  }
  return (
    <View style={styles.container}>
      <Title>Mis Hábitos</Title>
      <HabitCard name={habit.name} record={habit.record} nextMilestone={habit.nextMilestone} lastHistory={habit.lastHistory}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    paddingHorizontal: 16, 
   },
});
