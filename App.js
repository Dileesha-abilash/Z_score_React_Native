import 'react-native-gesture-handler';
import {View, Text} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import My_Stack from './screens/My_stack';
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <My_Stack/>

        </NavigationContainer>
    )
}

export default App