import {StyleSheet, View} from "react-native";
import * as React from "react";
import NeedToBuyIn from "./NeedToBuyIn";
import BuyIn from "./BuyIn";

let ProductCountInfo = () =>{
    return(
        <View style={styles.productCountInfo}>
            <NeedToBuyIn/>
            <BuyIn/>
        </View>
    )
}
const styles = StyleSheet.create({
    productCountInfo:{
        justifyContent: 'space-between', flexDirection: 'row'
    }
})
export default ProductCountInfo