import {Image, StyleSheet, TouchableOpacity} from "react-native";
import shopInImg from "../assets/shopIn.png";
import * as React from "react";
import cn from 'react-native-classnames';
import {mediaQuery, useDimensions} from "react-native-responsive-ui";

let ShopInBtn = ()=>{
    const {width, height} = useDimensions();
    const isSmallScreen = mediaQuery({maxWidth: 350}, width, height)
    const shopInBtnStyles = cn(styles, {shopInBtn_SmallDisplay: isSmallScreen, shopInBtn_NormalDisplay: !isSmallScreen})
    return(
        <TouchableOpacity style={shopInBtnStyles}>
            <Image source={shopInImg}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    shopInBtn_NormalDisplay:{marginLeft: 30, marginTop: 30},
    shopInBtn_SmallDisplay:{
        marginLeft: "15%",
    },
})
export default ShopInBtn


