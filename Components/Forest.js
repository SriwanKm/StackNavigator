import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {globalStyles} from "../styles/global";

const image = [
    {uri: "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg"},
];

export default function Forest({navigation}) {
    const pressed = (key) => {
        switch (key) {
            case 'Home':
                navigation.navigate('Home')
                break
            case 'Description':
                navigation.navigate('Description')
                break
            case 'Forest':
                navigation.navigate('Forest')
                break
            case 'Mountain':
                navigation.navigate('Mountain')
                break
            case 'Garden':
                navigation.navigate('Garden')
                break
            default :
                navigation.navigate('Home')
        }
    }

    return (
        <ScrollView>
            <View style={globalStyles.container}>

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
                        renderItem={({item}) => <View style={styles.navItem}>
                            <TouchableOpacity onPress={() => pressed(item.key)}>
                                <Text style={styles.navText}>{item.key}</Text>
                            </TouchableOpacity>
                        </View>}
                    />
                </View>
                <View style={styles.sub_con}>
                    <View style={styles.box_shadow}>
                        <ImageBackground source={image[0]} style={styles.img}/>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        // paddingBottom: 25,

    },

    sub_con: {
        marginVertical: 50,
        marginHorizontal: 30,
        backgroundColor: '#1164A6',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,

    },
    navText: {
        // flex: 1,
        color: '#1652B5',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        // paddingTop: 10,
        // fontFamily: 'Lora',
    },
    navItem: {
        marginHorizontal: 10,
    },
    img: {
        flex: 1,
        // width: '100%',
        height: 200,
        // marginHorizontal: 20,
        // marginBottom: 20,
        // paddingBottom: 360,
    },
    box_shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
    },
})
