import {useEffect, useState} from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import clockImg from "./assets/clockImg.png";
import * as React from "react";
import cn from 'react-native-classnames';
import {mediaQuery, useDimensions} from "react-native-responsive-ui";

let SaleTimer = (props) => {
    const {width, height} = useDimensions();
    const isSmallScreen = mediaQuery({maxWidth: 350}, width, height)
    let hours = 12
    let [seconds, setSeconds] = useState(hours * 3600)
    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1)
        }, 1000)
    }, [seconds])

    const storeItemStyles = cn(styles, "clockImg",{clockImg_SmallDisplay: isSmallScreen, clockImg_normalDisplay: !isSmallScreen})
    const leftTimeTextStyles = cn(styles, "leftTimeText",{leftTimeText_SmallDisplay: isSmallScreen, leftTimeText_normalDisplay: !isSmallScreen})
    return (
        <View style={styles.saleTimer}>
            <Image source={clockImg}
                   style={storeItemStyles}/>
            <Text style={styles.leftTimeLabel}>ОСТАЛОСЬ</Text>
            <Text style={leftTimeTextStyles}>
                {Math.floor(((seconds / 60) / 60))} ЧАСОВ
                : {Math.floor((seconds / 60) % 60)} МИНУТ
                : {seconds % 60} СЕКУНД
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    saleTimer: {
        flex: 1,
        backgroundColor: '#ff6600',
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    leftTimeText: {
        color: 'white',
        fontSize: 14,
    },
    leftTimeText_normalDisplay: {

    },
    leftTimeText_SmallDisplay: {

        fontSize: 10,
    },
    leftTimeLabel: {
        color: 'white', fontSize: 10
    },
    clockImg:{
        position: 'absolute',
        left: 18,
    },
    clockImg_normalDisplay: {
        top: 18
    },
    clockImg_SmallDisplay: {
        top: 14
    }
})
export default  React.memo(SaleTimer)