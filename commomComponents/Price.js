import {StyleSheet, Text} from "react-native";
import * as React from "react";

let Price = ()=>{
    return(
        <Text style={styles.priceText}>724,50 ₽</Text>
    )
}
const styles = StyleSheet.create({
    priceText:{
        fontWeight: 'bold', fontSize: 20
    }
})
export default Price