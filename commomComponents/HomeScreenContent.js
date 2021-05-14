import {StyleSheet, View} from "react-native";
import * as React from "react";
import ProductPhoto from "./ProductPhoto";
import ProductInfo from "./ProductInfo";

let HomeScreenContent = ()=>{
    return(
        <View style={styles.homeScreenContent}>
            <ProductPhoto/>
            <ProductInfo/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreenContent: {
        flex: 16
    }
})

export default HomeScreenContent