import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';
import NavTOP from "../Home/NavTOP";

const Home = () => {
    const navigation = useNavigation();
    const handleClick = () => {
        Alert.alert('Chưa làm');
    }
    return (
        <View style={styles.container}>
            <View style={styles.navtop}>
                <NavTOP />
            </View>
            <View style={styles.ad}>
                <Text style={styles.adtext}>
                    Find the best coffee for you
                </Text>
            </View>
            <View style={styles.find}>
                <Foundation name="magnifying-glass" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Find your Coffee..."
                />
            </View>
            <ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.all}>
                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/Cappuccino.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Cappuccino
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Steamed Milk
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/CappuccinoMilk.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Cappuccino
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Foam
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/Cappuccino.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Cappuccino
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Steamed Milk
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/CappuccinoMilk.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Cappuccino
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Foam
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/Cappuccino.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Cappuccino
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Steamed Milk
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.title}>
                    <Text style={styles.titletext}>
                        Coffe beans
                    </Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.all}>
                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/Cappuccinobeans.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Robusta Beans
                                        </Text>
                                        <Text style={styles.namedown}>
                                            Medium Roasted
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/RobustaBeans.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Liberica
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Steamed Milk
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/Cappuccinobeans.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Robusta Beans
                                        </Text>
                                        <Text style={styles.namedown}>
                                            Medium Roasted
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/RobustaBeans.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Liberica
                                        </Text>
                                        <Text style={styles.namedown}>
                                            With Steamed Milk
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleClick}>
                            <View style={styles.detail}>
                                <View>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/home/Cappuccinobeans.png')}
                                    />
                                </View>
                                <View style={styles.name_price}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameup}>
                                            Robusta Beans
                                        </Text>
                                        <Text style={styles.namedown}>
                                            Medium Roasted
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <View style={styles.unit_price}>
                                            <Text style={styles.unit}>
                                                $
                                            </Text>
                                            <Text style={styles.pricetext}>
                                                4.20
                                            </Text>
                                        </View>

                                        <TouchableOpacity onPress={handleClick}>
                                            <View style={styles.button}>
                                                <Text style={styles.up}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
    },
    navtop: {
        height: 50,
        marginTop: 50,
        marginBottom: 20,
    },
    ad: {
        width: '60%',
        marginLeft: 20
    },
    adtext: {
        color: 'white',
        fontSize: 30,
        fontWeight: "600",
    },
    find: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom:10,
        backgroundColor: '#141921',
        height: 50,
        alignItems: "center", borderRadius: 15
    },
    icon: {
        marginHorizontal: 20
    },
    all: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        marginLeft: 5
    },
    detail: {
        backgroundColor: '#20242B',
        paddingHorizontal: 15,
        paddingTop: 15,
        borderRadius: 20,
        margin: 15
    },
    name: {
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 10
    },
    nameup: {
        fontSize: 15,
        color: 'white'
    },
    namedown: {
        fontSize: 12,
        color: 'white',
    },
    price: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    unit_price: {
        flexDirection: "row",
        alignItems: "center"
    },
    unit: {
        color: '#D17842',
        margin: 10,
        fontSize: 15,
        fontWeight: "bold"
    },
    pricetext: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold"
    },
    button: {
        justifyContent: "flex-end",
        backgroundColor: '#D17842',
        padding: 3,
        borderRadius: 8,
    },
    up: {
        fontSize: 20,
        color: 'white'
    },
    title: {
        marginTop: 20
    },
    titletext: {
        color: 'white',
        marginLeft: 20,
        fontSize: 20
    }

})
export default Home;