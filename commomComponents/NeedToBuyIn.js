import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

let NeedToBuyIn = ()=>{
    return(
        <View>
            <Text style={styles.needToBuyInText}>
                Нужно выкупить:
                <Text style={styles.needToBuyInTextCount}>100</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    needToBuyInTextCount:{
        fontWeight: 'bold',
        color:'black'
    },
    needToBuyInText:{
        color: '#8a8a8a'
    }
})

export default NeedToBuyIn