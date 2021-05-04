import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from "../styles/global";


export default function Main({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text
                onPress={() => navigation.navigate('About')}
                style={globalStyles.titleText}>
                Kookai's Review App
            </Text>
        </View>

    )
}

