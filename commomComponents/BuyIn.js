import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

let BuyIn = ()=>{
    return(
        <View>
            <Text style={styles.buyInText}>Выкуплено:
                <Text style={styles.buyInCount}>300</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    buyInText:{
        textAlign: 'right',
        color: '#8a8a8a'
    },
    buyInCount:{fontWeight: 'bold',color: 'black'}
})
export default BuyIn