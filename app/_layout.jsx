import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="habits/index" options={{headerShown:false}} />
    </Stack>
  );
}