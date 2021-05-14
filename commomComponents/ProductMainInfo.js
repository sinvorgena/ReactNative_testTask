import {ScrollView, StyleSheet, View} from "react-native";
import FlexContainer from "./FlexContainer";
import ProductName from "./ProductName";
import ProductPriceInfo from "./ProductPriceInfo";
import ProductCountInfo from "./ProductCountInfo";
import * as React from "react";

let ProductMainInfo = ()=>{
    return(
        <View style={styles.productMainInfo}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <FlexContainer flexSize={1} components={<ProductName/>} keyName={'productName'}/>
                <FlexContainer flexSize={4} components={<ProductPriceInfo/>} keyName={'ProductPriceInfo'}/>
                <FlexContainer flexSize={1} components={<ProductCountInfo/>} keyName={'ProductCountInfo'}/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    productMainInfo: {
        flex:2,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',

    },
    scrollView:{
        flexDirection:'column',
        justifyContent: 'space-between',
        height: '100%'
    }
})
export default ProductMainInfo