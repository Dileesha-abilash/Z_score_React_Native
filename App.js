import 'react-native-gesture-handler';
import React from 'react';
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
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
          headerShown: false // This will hide all headers in the stack
        }}>
                <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Stack" component={My_Stack} />
            <Tab.Screen name="Tab2" component={Tab2} />
            <Tab.Screen name="Tab3" component={Tab3} />
            <Tab.Screen name="Tab4" component={Tab4} />
        </Tab.Navigator>
    );
}

export default App;
