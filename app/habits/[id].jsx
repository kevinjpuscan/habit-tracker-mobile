import { Stack, useSearchParams, Link } from 'expo-router';
import {View, StyleSheet} from 'react-native';
import colors from '../../src/theme/colors';
import { HeaderHabitDetail } from '../../src/components/HeaderHabitDetail';
import habitRepository from '../../src/core/habitInMemoryRepository'
import { DayContainer } from '../../src/components/DayContainer';
const {useState,useEffect} = require("react");

export default function Test(){
  const {id} = useSearchParams();
  const [habit, setHabit] = useState({});
  useEffect(() => {
    habitRepository.findById(id).then((habit)=>setHabit(habit))
  },[]);

  return <View>
    <Stack.Screen options={{headerShown:false}} />
    <HeaderHabitDetail name={habit.name} record={habit.record} nextMilestone={habit.nextMilestone} />
    <View style={styles.body}>
      <DayContainer title="Días" dayPoints={habit.days || []}/>
      <DayContainer title="Historial" dayPoints={habit.history || []}/>
    </View>
    <Link href={`/habits`}>Volver</Link>
  </View>;
}
const primary=colors.primary;
const secondary=colors.secondary;
const styles = StyleSheet.create({
  body: {
    padding: 24,
    gap:16,
  }
});
