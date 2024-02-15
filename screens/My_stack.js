import { View, Text } from 'react-native'
import React from 'react'
import loadingRes from './loadingRes'
import Subject_screen from './subject';
import Zscore from './Z'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import result from './result'
const Stack = createNativeStackNavigator();
function My_Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="subjects" component={Subject_screen} />
      <Stack.Screen name="z_dis" component={ Zscore} />
      <Stack.Screen name="loading" component={loadingRes} />
      <Stack.Screen name="result" component={result} />
    </Stack.Navigator>
  );
}
export default My_Stack