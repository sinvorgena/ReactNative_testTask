import {Image, View, StyleSheet} from "react-native";
import productPhoto from "../assets/candle.png";
import * as React from "react";

let ProductPhoto = () => {
    return (
        <View style={styles.productPhoto}>
            <View style={styles.productPhotoBox}>
                <Image source={productPhoto} style={styles.productPhotoImg}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productPhoto: {
        flex: 4,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    productPhotoBox:{width: '80%'},
    productPhotoImg: {
        height: "100%"
    }

})

export default ProductPhoto