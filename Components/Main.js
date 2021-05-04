import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {globalStyles} from "../styles/global";


const image = {uri: "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/mainImage.jpg"};
const pressed = () => {
    console.log("I'm pressed")
}
export default function Main({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text
                onPress={() => navigation.navigate('Description')}
                style={globalStyles.titleText}>
                Home
            </Text>

            <View style={styles.navContainer}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{flex: 1}}
                    data={[
                        {key: 'Home'},
                        {key: 'Description'},
                        {key: 'Forest'},
                        {key: 'Mountain'},
                        {key: 'Garden'},
                    ]}
                    renderItem={({item}) => (
                        <View style={styles.navItem}>
                            <TouchableOpacity onPress={pressed}>
                                <Text style={styles.navText}>{item.key}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>

            <ImageBackground source={image} style={styles.img}/>
        </View>

    )
}
const styles = StyleSheet.create({
    navContainer: {
        flex: 1,
        backgroundColor: '#fc0000',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: 40,
        // paddingBottom: 25,

    },
    navText: {
        // flex: 1,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        // paddingHorizontal: 10,
        // paddingTop: 10,
        fontFamily: 'Lora',
    },
    navItem: {
        marginHorizontal: 30,
    },
    img: {
        marginHorizontal: 20,
        marginBottom: 20,
        paddingBottom: 360,
    },
})







