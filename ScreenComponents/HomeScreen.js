import {View, StyleSheet} from "react-native";
import * as React from "react";
import SaleTimer from "../SaleTimer";
import HomeScreenContent from "../commomComponents/HomeScreenContent";

export default function HomeScreen() {
    return (
        <View style={styles.homeScreen}>
            <SaleTimer/>
            <HomeScreenContent/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1
    }
})
