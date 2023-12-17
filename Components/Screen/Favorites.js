import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import NavTOP from "../Home/NavTOP";
const Favorites = () => {
    const pagename = "Favorites";
    return (
        <View style={styles.container}>
            <View style={styles.navtop}>
                <NavTOP pagename={pagename} />
            </View>
            <ScrollView>
                <View style={styles.inside}>
                    <View style={styles.content}>
                        <Image
                            source={require('../../assets/favourite/Cappuccino.png')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.total}>
                            <View style={styles.name}>
                                <Text style={styles.name}>
                                    Cappuccino
                                </Text>
                                <Text style={styles.more}>
                                    With Steamed Milk
                                </Text>
                            </View>
                            <View style={styles.rate}>
                                <Text style={styles.star}>&#x2605;</Text>
                                <Text style={styles.ratenumber}> 4.5</Text>
                                <Text style={styles.votes}>(6,879)</Text>
                            </View>
                        </View>
                        <View style={styles.material}>
                            <View style={styles.up}>
                                <View style={styles.detailmaterial}>
                                    <FontAwesome name="coffee" size={24} color="#D17842" />
                                    <Text style={styles.namematerial}>Coffee</Text>
                                </View>
                                <View style={styles.detailmaterial}>
                                    <MaterialCommunityIcons name="water" size={24} color="#D17842" />
                                    <Text style={styles.namematerial}>Milk</Text>
                                </View>
                            </View>

                            <View style={styles.down}>
                                <Text style={styles.sizename}>
                                    Medium Roasted
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <View style={styles.borderdescription}>
                            <Text style={styles.descriptiontext}>
                                Description
                            </Text>
                            <Text style={styles.descriptiontext}>
                                Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.
                            </Text>
                        </View>

                    </View>
                    <View style={styles.overlay}>
                    </View>
                </View>

                <View style={styles.inside}>
                    <View style={styles.content}>
                        <Image
                            source={require('../../assets/favourite/Cappuccino.png')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.total}>
                            <View style={styles.name}>
                                <Text style={styles.name}>
                                    Cappuccino
                                </Text>
                                <Text style={styles.more}>
                                    With Steamed Milk
                                </Text>
                            </View>
                            <View style={styles.rate}>
                                <Text style={styles.star}>&#x2605;</Text>
                                <Text style={styles.ratenumber}> 4.5</Text>
                                <Text style={styles.votes}>(6,879)</Text>
                            </View>
                        </View>
                        <View style={styles.material}>
                            <View style={styles.up}>
                                <View style={styles.detailmaterial}>
                                    <FontAwesome name="coffee" size={24} color="#D17842" />
                                    <Text style={styles.namematerial}>Coffee</Text>
                                </View>
                                <View style={styles.detailmaterial}>
                                    <MaterialCommunityIcons name="water" size={24} color="#D17842" />
                                    <Text style={styles.namematerial}>Milk</Text>
                                </View>
                            </View>

                            <View style={styles.down}>
                                <Text style={styles.sizename}>
                                    Medium Roasted
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <View style={styles.borderdescription}>
                            <Text style={styles.descriptiontext}>
                                Description
                            </Text>
                            <Text style={styles.descriptiontext}>
                                Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.
                            </Text>
                        </View>

                    </View>
                    <View style={styles.overlay}>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
    },
    inside:{
        flex:1,
        marginBottom:40
    },
    navtop: {
        height: 50,
        marginTop: 50,
        marginBottom: 20,
        color: 'white'
    },
    text: {
        color: 'white'
    },
    content: {
        marginHorizontal: 20,
        height: 500,
        borderRadius: 25,
        position: "relative",
    },
    // total:{
    //     flexDirection:"row",
    // },
    img: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    detail: {
        ...StyleSheet.absoluteFillObject,
        marginTop: '80%',
        marginHorizontal: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 30,
        zIndex: 2,
        position: "absolute",
        flexDirection: "row"
    },
    overlay: {
        // flex: 1,
        backgroundColor: 'black',
        opacity: 0.5,
        zIndex: 1,
        // top:'-35%',
        height: 180,
        position: "absolute",
        width: 375,
        top: '50%',
        marginLeft: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    name: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 10,

    },
    more: {
        color: 'gray',
        fontSize: 18
    },
    rate: {
        flexDirection: "row",
        marginTop: 30
    },
    star: {
        color: '#D17842',
        fontSize: 20
    },
    ratenumber: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 5
    },
    votes: {
        fontSize: 18,
        color: 'gray'
    },
    material: {
        marginTop: 20,
        marginBottom: 160,
        justifyContent: "space-between",
        marginLeft: 15,
    },
    up: {
        flexDirection: "row",
    },
    down: {
        backgroundColor: '#141921',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        height: 50,
        marginHorizontal: 10
    },
    detailmaterial: {
        width: 60,
        height: 60,
        backgroundColor: '#141921',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 10
    },
    namematerial: {
        color: 'gray',
        fontSize: 12
    },

    sizename: {
        color: 'gray',
        fontSize: 12
    },
    description: {
        marginHorizontal: 20,
        backgroundColor: '#161A20',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 140
    },
    borderdescription: {
        marginTop: 20,
        marginHorizontal: 30,
    },
    descriptiontext: {
        color: 'gray',
        fontSize: 15,
    }
})
export default Favorites;