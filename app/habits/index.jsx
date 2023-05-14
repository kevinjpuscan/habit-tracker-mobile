import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { HabitsList } from '../../src/components/HabitsList';
import { ActionContainer } from '../../src/components/ActionContainer';

export default function Home() {

  return (
    <View>
      <Stack.Screen options={{headerShown:true,title:'Mis hábitos'}} />
      <HabitsList />
      <ActionContainer label="Nuevo hábito"/>
      <StatusBar style="auto" />
    </View>
  );
}
