import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { HabitsList } from '../../src/components/HabitsList';

export default function Home() {

  return (
    <View>
      <Stack.Screen options={{headerShown:true,title:'Mis hábitos'}} />
      <HabitsList />
      <StatusBar style="auto" />
    </View>
  );
}

