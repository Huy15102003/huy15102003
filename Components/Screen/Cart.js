import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Cart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", quantity: 0 },
    ]);

    const increaseQuantity = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });

        setProducts(updatedProducts);
    };

    const decreaseQuantity = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId && product.quantity > 0) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });

        setProducts(updatedProducts);
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.infor}>
                        <View style={styles.inforimg}>
                            <Image
                                source={require('../../assets/cart/Maskgroup.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.inforname}>
                            <Text style={styles.name}>
                                Cappuccino
                            </Text>
                            <Text style={styles.moreinfor}>
                                With Steamed Milk
                            </Text>
                            <View style={styles.detail}>
                                <Text style={styles.sizename}>
                                    Medium Roasted
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.size_priceS}>
                        <View style={styles.sizeprice}>
                            <View style={styles.size}>
                                <Text style={styles.sizetext}>
                                    S
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.unit}>
                                    $
                                </Text>
                                <Text style={styles.pricetext}>
                                    4.20
                                </Text>
                            </View>
                        </View>

                        {products.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        onPress={() => decreaseQuantity(product.id)}
                                        style={[styles.button, { marginRight: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.count}>
                                        <Text style={styles.quantity}>{product.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => increaseQuantity(product.id)}
                                        style={[styles.button, { marginLeft: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.size_priceS}>
                        <View style={styles.sizeprice}>
                            <View style={styles.size}>
                                <Text style={styles.sizetext}>
                                    M
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.unit}>
                                    $
                                </Text>
                                <Text style={styles.pricetext}>
                                    4.20
                                </Text>
                            </View>
                        </View>

                        {products.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        onPress={() => decreaseQuantity(product.id)}
                                        style={[styles.button, { marginRight: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.count}>
                                        <Text style={styles.quantity}>{product.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => increaseQuantity(product.id)}
                                        style={[styles.button, { marginLeft: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.size_priceS}>
                        <View style={styles.sizeprice}>
                            <View style={styles.size}>
                                <Text style={styles.sizetext}>
                                    M
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.unit}>
                                    $
                                </Text>
                                <Text style={styles.pricetext}>
                                    6.20
                                </Text>
                            </View>
                        </View>

                        {products.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        onPress={() => decreaseQuantity(product.id)}
                                        style={[styles.button, { marginRight: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.count}>
                                        <Text style={styles.quantity}>{product.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => increaseQuantity(product.id)}
                                        style={[styles.button, { marginLeft: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.infor}>
                        <View style={styles.inforimg}>
                            <Image
                                source={require('../../assets/cart/Cappuccino.png')}
                                style={styles.imgdetail}
                            />
                        </View>
                        <View style={[styles.inforname, styles.infornamedetail]}>
                            <Text style={styles.name}>
                                Cappuccino
                            </Text>
                            <Text style={styles.moreinfor}>
                                With Steamed Milk
                            </Text>
                            <View style={[styles.sizeprice, styles.sizepricedetail]}>
                                <View style={styles.size}>
                                    <Text style={styles.sizetext}>
                                        L
                                    </Text>
                                </View>
                                <View style={styles.price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.pricetext}>
                                        4.20
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_priceS}>


                                {products.map((product) => (
                                    <View key={product.id} style={styles.productContainer}>
                                        <View style={styles.quantityContainer}>
                                            <TouchableOpacity
                                                onPress={() => decreaseQuantity(product.id)}
                                                style={[styles.button, styles.buttondetail, { marginRight: 10 }]}
                                            >
                                                <Text style={styles.buttonText}>-</Text>
                                            </TouchableOpacity>
                                            <View style={styles.count}>
                                                <Text style={styles.quantity}>{product.quantity}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => increaseQuantity(product.id)}
                                                style={[styles.button, styles.buttondetail, { marginLeft: 10 }]}
                                            >
                                                <Text style={styles.buttonText}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>


                </View>

                <View style={styles.content}>
                    <View style={styles.infor}>
                        <View style={styles.inforimg}>
                            <Image
                                source={require('../../assets/cart/Robusta.png')}
                                style={styles.imgdetail}
                            />
                        </View>
                        <View style={[styles.inforname, styles.infornamedetail]}>
                            <Text style={styles.name}>
                                Robusta Beans
                            </Text>
                            <Text style={styles.moreinfor}>
                                From Africa
                            </Text>
                            <View style={[styles.sizeprice,styles.sizepricedetail]}>
                                <View style={styles.size}>
                                    <Text style={styles.sizename}>
                                        250gm
                                    </Text>
                                </View>
                                <View style={styles.price}>
                                    <Text style={styles.unit}>
                                        $
                                    </Text>
                                    <Text style={styles.pricetext}>
                                        6.20
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.size_priceS}>


                                {products.map((product) => (
                                    <View key={product.id} style={styles.productContainer}>
                                        <View style={styles.quantityContainer}>
                                            <TouchableOpacity
                                                onPress={() => decreaseQuantity(product.id)}
                                                style={[styles.button, styles.buttondetail, { marginRight: 10 }]}
                                            >
                                                <Text style={styles.buttonText}>-</Text>
                                            </TouchableOpacity>
                                            <View style={styles.count}>
                                                <Text style={styles.quantity}>{product.quantity}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => increaseQuantity(product.id)}
                                                style={[styles.button, styles.buttondetail, { marginLeft: 10 }]}
                                            >
                                                <Text style={styles.buttonText}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>


                </View>

                <View style={styles.content}>
                    <View style={styles.infor}>
                        <View style={styles.inforimg}>
                            <Image
                                source={require('../../assets/cart/Liberica.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.inforname}>
                            <Text style={styles.name}>
                                Liberica Coffee Beans
                            </Text>
                            <Text style={styles.moreinfor}>
                                With Steamed Milk
                            </Text>
                            <View style={styles.detail}>
                                <Text style={styles.sizename}>
                                    Medium Roasted
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.size_priceS}>
                        <View style={styles.sizeprice}>
                            <View style={styles.size}>
                                <Text style={styles.sizename}>
                                    250gm
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.unit}>
                                    $
                                </Text>
                                <Text style={styles.pricetext}>
                                    4.20
                                </Text>
                            </View>
                        </View>

                        {products.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        onPress={() => decreaseQuantity(product.id)}
                                        style={[styles.button, { marginRight: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.count}>
                                        <Text style={styles.quantity}>{product.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => increaseQuantity(product.id)}
                                        style={[styles.button, { marginLeft: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.size_priceS}>
                        <View style={styles.sizeprice}>
                            <View style={styles.size}>
                                <Text style={styles.sizename}>
                                    500gm
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.unit}>
                                    $
                                </Text>
                                <Text style={styles.pricetext}>
                                    4.20
                                </Text>
                            </View>
                        </View>

                        {products.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        onPress={() => decreaseQuantity(product.id)}
                                        style={[styles.button, { marginRight: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.count}>
                                        <Text style={styles.quantity}>{product.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => increaseQuantity(product.id)}
                                        style={[styles.button, { marginLeft: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.size_priceS}>
                        <View style={styles.sizeprice}>
                            <View style={styles.size}>
                                <Text style={styles.sizename}>
                                    1Kg
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.unit}>
                                    $
                                </Text>
                                <Text style={styles.pricetext}>
                                    4.20
                                </Text>
                            </View>
                        </View>

                        {products.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        onPress={() => decreaseQuantity(product.id)}
                                        style={[styles.button, { marginRight: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.count}>
                                        <Text style={styles.quantity}>{product.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => increaseQuantity(product.id)}
                                        style={[styles.button, { marginLeft: 10 }]}
                                    >
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.price_pay}>
                    <View style={styles.totalprice}>
                        <Text style={styles.totalpricetext}>
                            Total Price
                        </Text>
                        <View style={styles.price}>
                            <Text style={styles.unit}>
                                $
                            </Text>
                            <Text style={styles.pricetext}>
                                10.40
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonpay}>
                        <View style={styles.pay}>

                            <Text style={styles.paytext}>
                                Pay
                            </Text>
                        </View>
                    </TouchableOpacity>
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
    text: {
        textAlign: "center",
        alignSelf: "center",
        color: 'white'
    },
    content: {
        backgroundColor: '#1E2229',
        borderRadius: 20,
        marginTop: 50,
        flexDirection: "column",
        padding: 15,
        marginLeft: 20,
        marginRight: 20
    },
    img: {
        width: '100%',
        height: '100%'
    },
    imgdetail: {
        width: '140%',
        height: '140%'
    },
    infor: {
        flexDirection: "row"
    },
    inforimg: {
        height: 100,
        width: 100,

    },
    inforname: {
        marginLeft: 30,
        flex: 1
    },
    infornamedetail: {
        marginLeft: 60
    },
    name: {
        color: '#EDEEEE',
        fontSize: 20
    },
    moreinfor: {
        color: 'gray',
        fontSize: 12
    },
    detail: {
        backgroundColor: '#141921',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 10,
        width: 150,
        height: 50
    },
    sizepricedetail: {
        marginTop: 10
    },
    size_priceS: {
        flexDirection: "row",
        marginTop: 10,
    },
    sizeprice: {
        flexDirection: "row",
    },
    size: {
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 40,
        borderRadius: 10
    },
    sizename: {
        color: 'gray',
        fontSize: 12
    },
    sizetext: {
        color: 'white',
        fontSize: 20
    },
    unit: {
        color: '#D17842',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5,
    },
    price: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 10
    },
    pricetext: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
    button: {
        backgroundColor: '#D17842',
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 10
    },
    buttondetail: {
        marginLeft: 0
    },
    count: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 10,
        borderColor: '#D17842',
        borderWidth: 1,
    },
    quantity: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
    productContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 5,
    },
    price_pay: {
        flexDirection: "row",
        marginTop: 30,
        height: 70
    },
    totalprice: {
        flexDirection: "column",
        marginRight: 20,
        marginLeft:15

    },
    totalpricetext: {
        color: 'white',
        marginLeft: 10
    },
    pay: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#D17842',
        marginHorizontal: 20,
        borderRadius: 10,
        height: 60,
    },
    buttonpay: {
        flex: 1
    },
    paytext: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    }

})
export default Cart;