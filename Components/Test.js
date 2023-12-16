import React from "react";
import { Text,View, StyleSheet } from "react-native";

const Test = () =>{
    return(
    <View style={styles.container}> 
        <Text style={styles.text}>
            hello world
        </Text>
    </View>
    );
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
},
text:{
    textAlign: "center",
    alignSelf: "center",

},
})
export default Test;