import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from "../styles/global";


export default function Main() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Kookai's Review App</Text>
        </View>

    )
}

