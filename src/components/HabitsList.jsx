import { StyleSheet, View , ScrollView} from 'react-native';
import { HabitCard } from '../../src/components/HabitCard';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import habitRepository from '../core/habitInMemoryRepository'

export function HabitsList(){
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    habitRepository.find().then((habits)=>setHabits(habits))
  },[]);

  return  <ScrollView>
  <View style={styles.container}> 
  {habits.map(habit => (
    <Link href={`/habits/${habit.id}`} key={`link-${habit.id}`}>
      <HabitCard key={habit.id} name={habit.name} record={habit.record} nextMilestone={habit.nextMilestone} lastHistory={habit.lastHistory}/>
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
