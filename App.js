import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet, Text, View} from 'react-native';
import Main from './Components/Main'
import About from './Components/About'
import {useFonts} from 'expo-font'
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function App() {
    const [loaded] = useFonts({
        Cookie: require('./assets/fonts/Cookie-Regular.ttf'),
        LuckiestGuy: require('./assets/fonts/LuckiestGuy-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main}/>
                <Stack.Screen name="About" component={About}/>
                {/*<Stack.Screen name="Profile" component={Profile}/>*/}
                {/*<Stack.Screen name="Settings" component={Settings}/>*/}
            </Stack.Navigator>
        </NavigationContainer>

    );
}
