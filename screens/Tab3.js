import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import BeforeLoaded from './Beforeload';
import AfterLoad from './AfterLoad';

const Tab3 = () => {
  const Stack = createNativeStackNavigator();
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false 
  }} initialRouteName ='before'>
      {/* <Stack.Screen name="Splash" component={splash} /> */}
      <Stack.Screen name="before" component={BeforeLoaded} /> 
      <Stack.Screen name="after" component={AfterLoad} /> 
      
    </Stack.Navigator>

  )
}

export default Tab3

const styles = StyleSheet.create({})