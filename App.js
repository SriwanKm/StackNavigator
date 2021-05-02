import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './Components/Main'
import { useFonts } from 'expo-font'


export default function App() {
    const [loaded] = useFonts({
        Cookie: require('./assets/fonts/Cookie-Regular.ttf'),
        LuckiestGuy: require('./assets/fonts/LuckiestGuy-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <Main/>
    );
}
