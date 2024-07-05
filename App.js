// App.js

import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import My_Stack from './screens/My_stack';
import Tab2 from './screens/Tab2';
import Tab3 from './screens/Tab3';
import Tab4 from './screens/tab4';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

    function sendRequestWithoutWaiting() {
        fetch('https://z-score-api-1.onrender.com/guess2', {
          method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        }).catch(error => {
          console.error('Request failed:', error);
        });
      }

  useEffect(() => {
    // Hide the splash screen after 3 seconds
    const hideSplashScreen = async () => {
    sendRequestWithoutWaiting();
      await SplashScreen.preventAutoHideAsync();
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    };

    hideSplashScreen();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}  initialRouteName ='Main'>
      <Tab.Screen name="Main" component={Tab4} />
      <Tab.Screen name="University" component={My_Stack} />
      <Tab.Screen name="Zscore" component={Tab2} />
      <Tab.Screen name="Marks" component={Tab3} />
    </Tab.Navigator>
  );
};

export default App;
