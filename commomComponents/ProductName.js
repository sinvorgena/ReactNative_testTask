import {Text, StyleSheet} from "react-native";
import * as React from "react";


let ProductName = ()=>{
    return(
        <Text style={styles.productNameText}>Подсвечник на 3 свечи бронза 25 см</Text>
    )
}
const styles = StyleSheet.create({
    productNameText: {fontWeight: 'bold', fontSize: 16}
})
export default ProductName