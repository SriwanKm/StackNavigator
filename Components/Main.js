import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {globalStyles} from "../styles/global";


const image = {uri: "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg"};

export default function Main({navigation}) {
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
                <View style={styles.topHead}>
                    <Text style={styles.topHeadText}><Text>Landscape</Text><Text
                        style={styles.topHeadText2}>Titles</Text></Text>
                </View>


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
                        <ImageBackground source={image} style={styles.img}/>
                    </View>
                    <Text>

                    </Text>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.subHeadText}>
                            Template Information
                        </Text>
                        <Text style={styles.content}>
                            You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.
                        </Text>
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
    topHead: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    topHeadText: {
        color: '#1652B5',
        fontWeight: 'bold',
        fontSize: 36,
        paddingVertical: 15,
    },
    topHeadText2: {
        color: '#092645',
    },
    sub_con: {
        marginHorizontal: 30,
        backgroundColor: '#ffffff',

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
        height: 250,
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
    subHeadText: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#133F83'
    },
    content: {
        paddingHorizontal: 10,
        paddingBottom: 25,
    },
})







