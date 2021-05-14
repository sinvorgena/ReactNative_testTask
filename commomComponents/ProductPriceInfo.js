import {StyleSheet, View} from "react-native";
import {Swiper} from "../Swiper";
import * as React from "react";
import FlexContainer from "./FlexContainer";
import ShopInBtn from "./ShopInBtn";
import Price from "./Price";

let ProductPriceInfo = () =>{
    return(
        <View style={styles.productPriceInfo}>
            <FlexContainer flexSize={3} components={[<Price/>,<Swiper/>]} keyName={'swiper'} style={{justifyContent:'space-around', flexDirection: 'column'}}/>
            <FlexContainer keyName={'ShopInBtn'} flexSize={1} components={<ShopInBtn/>}/>
        </View>
    )
}
const styles = StyleSheet.create({
    productPriceInfo:{
        height: '100%',
        flexDirection: 'row',
        paddingVertical: '2%'
    }
})
export default ProductPriceInfo