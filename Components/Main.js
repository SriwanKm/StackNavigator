import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Kookai's Review App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'Cookie',
        fontSize: 36,
    }
});
