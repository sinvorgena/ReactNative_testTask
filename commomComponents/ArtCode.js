import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

let ArtCode = ()=>{
    return(
        <View style={styles.artCode}>
            <Text style={styles.artCodeText}>Арт./Код: 668093</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    artCode:{
        flex: 1,
        marginVertical: "2%",


    },
    artCodeText:{
        color: '#8a8a8a'
    }
})
export default ArtCode