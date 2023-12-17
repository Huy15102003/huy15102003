import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import NavTOP from "../Home/NavTOP";
import { useNavigation } from "@react-navigation/native";
const Notification = () => {
    const navigation = useNavigation();
    const handleClick = () => {
        Alert.alert('Chưa làm');
    }
    const pagename = "Order History";
    return (
        <View style={styles.container}>
            <View style={styles.navtop}>
                <NavTOP pagename={pagename} />
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.date_amount}>
                        <View style={styles.date}>
                            <Text style={styles.dateup}> Order Date</Text>
                            <Text style={styles.datedown}> 20th March 16:23</Text>
                        </View>
                        <View style={styles.amount}>
                            <Text style={styles.amountup}> Total Amount</Text>
                            <Text style={styles.amountdown}> $ 74.40</Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailup}>
                            <View style={styles.img_name_price}>
                                <View style={styles.viewimg}>
                                    <Image
                                        source={require('../../assets/cart/Cappuccino.png')}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.name}>
                                    <Text style={styles.nameup}>
                                        Cappuccino
                                    </Text>
                                    <Text style={styles.namedown}>
                                        With Steamd Milk
                                    </Text>
                                </View>
                                <View style={styles.viewprice}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        37.20
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.sizetext}>
                                        S
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        4.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        8.40
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.sizetext}>
                                        M
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        6.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        12.40
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.sizetext}>
                                        L
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        8.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        16.40
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.detaildown}>
                            <View style={styles.img_name_price}>
                                <View style={styles.viewimg}>
                                    <Image
                                        source={require('../../assets/cart/Maskgroup.png')}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.name}>
                                    <Text style={styles.nameup}>
                                        Cappuccino
                                    </Text>
                                    <Text style={styles.namedown}>
                                        With Steamd Milk
                                    </Text>
                                </View>
                                <View style={styles.viewprice}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        37.20
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.sizetext}>
                                        S
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        4.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        8.40
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.sizetext}>
                                        M
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        6.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        12.40
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.date_amount}>
                        <View style={styles.date}>
                            <Text style={styles.dateup}> Order Date</Text>
                            <Text style={styles.datedown}> 19th March 2023</Text>
                        </View>
                        <View style={styles.amount}>
                            <Text style={styles.amountup}> Total Amount</Text>
                            <Text style={styles.amountdown}> $ 74.40</Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailup}>
                            <View style={styles.img_name_price}>
                                <View style={styles.viewimg}>
                                    <Image
                                        source={require('../../assets/cart/Liberica.png')}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.name}>
                                    <Text style={styles.nameup}>
                                        Liberica Beans
                                    </Text>
                                    <Text style={styles.namedown}>
                                        From Africa
                                    </Text>
                                </View>
                                <View style={styles.viewprice}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        37.20
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.mass}>
                                        250gm
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        4.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        8.40
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.mass}>
                                        500gm
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        6.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        12.40
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.mass}>
                                        1Kg
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        8.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        16.40
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.detaildown}>
                            <View style={styles.img_name_price}>
                                <View style={styles.viewimg}>
                                    <Image
                                        source={require('../../assets/cart/Robusta.png')}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.name}>
                                    <Text style={styles.nameup}>
                                        RobustaBeans
                                    </Text>
                                    <Text style={styles.namedown}>
                                        From Africa
                                    </Text>
                                </View>
                                <View style={styles.viewprice}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        37.20
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.mass}>
                                        250gm
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        4.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        8.40
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_quantity}>
                                <View style={styles.size}>
                                    <Text style={styles.mass}>
                                        500gm
                                    </Text>
                                </View>
                                <View style={styles.unit_price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.price}>
                                        6.20
                                    </Text>
                                </View>
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>
                                        X
                                    </Text>
                                    <Text style={styles.number}>
                                        2
                                    </Text>
                                </View>
                                <View style={styles.totalprice}>
                                    <Text style={styles.color}>
                                        12.40
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={handleClick}>
                    <View style={styles.button}>
                        <Text style={styles.download}>
                            Download
                        </Text>
                    </View>
                </TouchableOpacity>
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
        marginBottom: 20
    },
    date_amount: {
        marginHorizontal: 20,
        flexDirection: "row",

    },
    date: {
        flex: 1,
    },
    dateup: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5
    },
    datedown: {
        color: '#7D7F81',
        fontSize: 18
    },
    amount: {
        flex: 1,
    },
    amountup: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "right",
        marginBottom: 5
    },
    amountdown: {
        color: '#684029',
        fontSize: 18,
        textAlign: "right"
    },
    detail: {
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 40
    },
    detailup: {
        backgroundColor: '#21262D',
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20
    },
    img_name_price: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    viewimg: {
        width: 80,
        height: 80,
    },
    img: {
        width: '100%',
        height: '100%'
    },
    name: {
        justifyContent: "center"
    },
    nameup: {
        color: 'white',
        fontSize: 20
    },
    namedown: {
        color: 'white',
        fontSize: 12
    },
    viewprice: {
        flexDirection: "row",
        alignItems: "center"
    },
    unit: {
        color: '#BE6E3F',
        fontSize: 25,
        marginRight: 5
    },
    price: {
        color: 'white',
        fontSize: 25
    },
    size_quantity: {
        flexDirection: "row",
        marginTop: 10,
    },
    size: {
        backgroundColor: 'black',
        width: 60,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginRight: 1
    },
    sizetext: {
        color: 'white',
        fontSize: 20
    },
    unit_price: {
        backgroundColor: 'black',
        flexDirection: "row",
        width: 120,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    quantity: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 18
    },
    color: {
        color: '#BE6E3F',
        fontSize: 25,
        textAlign: "right"
    },
    number: {
        color: 'white',
        fontSize: 25,
        marginLeft: 3
    },
    totalprice: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 5,
    },
    detaildown: {
        backgroundColor: '#21262D',
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 20,
    },
    mass: {
        color: 'white',
        fontSize: 12
    },
    button:{
        backgroundColor:'#D17842',
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:20,
        borderRadius:15,
        height:60,
        marginTop:-10
    },
    download:{
        fontSize:15,
        color:'white',
        fontWeight:"bold"
    }
})
export default Notification;