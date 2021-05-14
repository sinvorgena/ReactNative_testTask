import {View, StyleSheet} from "react-native";
import * as React from "react";
import ProductMainInfo from "./ProductMainInfo";
import ArtCode from "./ArtCode";

let ProductInfo = ()=>{
    return(
        <View style={styles.productInfo}>
            <ProductMainInfo/>
            <ArtCode/>
        </View>
    )
}

const styles = StyleSheet.create({
    productInfo: {
        flex: 3,
        paddingVertical: 10,
        paddingHorizontal: "5%",
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6',
        justifyContent: 'space-between',
        flexDirection: 'column',
    }
})

export default ProductInfo