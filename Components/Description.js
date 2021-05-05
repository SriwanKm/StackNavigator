import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {globalStyles} from "../styles/global";

export default function Description({navigation}) {
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
                    <Text style={globalStyles.subHeadText}>
                        First Page
                    </Text>
                    <Text style={globalStyles.content}>
                        Home Page - clone version of the template
                    </Text>
                    <Text style={globalStyles.subHeadText}>
                        Second Page
                    </Text>
                    <Text style={globalStyles.content}>
                        This Page - app feather and description
                    </Text>
                    <Text style={globalStyles.subHeadText}>
                        Third Page
                    </Text>
                    <Text style={globalStyles.content}>
                        Forest Page - the page show picture of the forest
                    </Text>
                    <Text style={globalStyles.subHeadText}>
                        Forth Page
                    </Text>
                    <Text style={globalStyles.content}>
                        Mountain Page - the page show picture of the mountain
                    </Text>
                    <Text style={globalStyles.subHeadText}>
                        Fifth Page
                    </Text>
                    <Text style={globalStyles.content}>
                        Garden Page - the page show picture of the garden
                    </Text>

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
        marginHorizontal: 30,
        marginVertical: 50,
        backgroundColor: '#ffffff',
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

})


