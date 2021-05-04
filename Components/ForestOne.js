import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from "../styles/global";


export default function ForestOne({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text
                style={globalStyles.titleText}
                onPress={() => navigation.navigate('About')}>
                Forest One
            </Text>
        </View>

    )
}

