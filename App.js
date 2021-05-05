import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet, Text, View} from 'react-native';
import Main from './Components/Main'
import Description from "./Components/Description";
import Forest from './Components/Forest'
import Mountain from './Components/Mountain'
import Garden from './Components/Garden'

// import {useFonts} from 'expo-font'
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function App() {
    // const [loaded] = useFonts({
    //     Cookie: require('./assets/fonts/Cookie-Regular.ttf'),
    //     LuckiestGuy: require('./assets/fonts/LuckiestGuy-Regular.ttf'),
    //     Lora: require('./assets/fonts/Lora-VariableFont_wght.ttf')
    // });
    //
    // if (!loaded) {
    //     return null;
    // }

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main}/>
                <Stack.Screen name="Description" component={Description}/>
                <Stack.Screen name="Forest" component={Forest}/>
                <Stack.Screen name="Mountain" component={Mountain}/>
                <Stack.Screen name="Garden" component={Garden}/>
                {/*<Stack.Screen name="Profile" component={Profile}/>*/}
                {/*<Stack.Screen name="Settings" component={Settings}/>*/}
            </Stack.Navigator>
        </NavigationContainer>

    );
}
