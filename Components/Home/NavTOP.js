import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from '@expo/vector-icons';
const NavTOP = ({ pagename }) => {
    const navigation = useNavigation();
    const handleClick = () => {
        Alert.alert('Chưa làm');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleClick} style={styles.buttonoption}>
                <View style={styles.option}>
                    <Entypo name="grid" size={30} color="#404348" />
                </View>
            </TouchableOpacity>
            <View style={styles.title}>
            <Text style={styles.pagenameText}>{pagename}</Text>
            </View>
            <TouchableOpacity onPress={handleClick} style={styles.buttonoption}>
                <View style={styles.option}>
                    <Image
                        style={styles.avtImg}
                        source={
                            require('../../assets/avt.png')} />
                </View>
            </TouchableOpacity>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        textAlign: "center",
    },
    title: {
        alignItems: "center",
        justifyContent:"center"
    },
    pageTitle:{
        color:'white',
        fontSize:25,
    },
    option: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#191D25',
        alignItems: "center",
        justifyContent: "center"
    },
    avtImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    pagenameText:{
        color:'white',
        fontSize:25,
        fontWeight:"bold"
    }
})
export default NavTOP;