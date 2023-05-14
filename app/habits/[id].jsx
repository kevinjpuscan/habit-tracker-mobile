import { Stack, useSearchParams } from 'expo-router';
import {View, Text} from 'react-native';

export default function Test(){
  const {id} = useSearchParams();
  return <View>
    <Stack.Screen options={{headerShown:true, title:'Detalle de hábito'}} />
    <Text>Test {id}</Text>
  </View>;
}
