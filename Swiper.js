import {useEffect, useRef, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import prevBtnImg from "./assets/prevBtn.png";
import nextBtnImg from "./assets/nextBtn.png";
import * as React from "react";
import cn from "react-native-classnames";

export function Swiper() {
    const scrollRef = useRef();
    const scroll = (to) => {
        scrollRef.current.scrollTo({
            x: to,
            animated: true
        })
    }
    let [selected, setSelected] = useState('<3')
    let [itemsDataJsx, setItemsDataJsx] = useState([])
    let itemsData = [
        {itemCost: '700,00', quantity: '<3'},
        {itemCost: '650,00', quantity: '4-10'},
        {itemCost: '600,00', quantity: '11-20'},
        {itemCost: '550,00', quantity: '21-30'},
        {itemCost: '500,00', quantity: '31-40'},
        {itemCost: '450,00', quantity: '41-50'}
    ]
    useEffect(() => {

        setItemsDataJsx(itemsData.map((el, index) => {
            if (index === itemsData.length - 1) {
                return <SwiperItem isSelected={selected} key={el.quantity}
                                   setSelected={setSelected} itemCost={el.itemCost}
                                   quantity={el.quantity}/>
            } else {
                return <SwiperItem isSelected={selected} key={el.quantity}
                                   setSelected={setSelected} itemCost={el.itemCost}
                                   quantity={el.quantity} marginRightValue={5}/>
            }
        }))
    }, [itemsData.length, selected])
    return (
        <View style={styles.swiper}>
            <TouchableOpacity onPress={() => scroll(-300)}><Image source={prevBtnImg}/></TouchableOpacity>
            <ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false}
                        style={styles.scrollView}>
                {itemsDataJsx}
            </ScrollView>
            <TouchableOpacity onPress={() => scroll(300)}><Image source={nextBtnImg}/></TouchableOpacity>
        </View>
    )
}

let SwiperItem = (props) => {
    const shopInBtnStyles = cn(styles, 'swiperItem',{swiperItemSelected: props.isSelected===props.quantity})
    return (
        <View style={{...shopInBtnStyles, marginRight: props.marginRightValue}}>
            <TouchableOpacity onPress={() => {
                props.setSelected(props.quantity)
            }} value={props.quantity}>
                <Text style={{fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>{props.itemCost}</Text>
                <Text style={{textAlign: 'center', fontSize: 12}}>{props.quantity} шт.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    swiper:{flexDirection: 'row'},
    scrollView:{marginRight: 6, marginLeft: 6},
    swiperItem:{
        width: 75,
        height: 34,
        borderWidth: 1,
    },
    swiperItemSelected:{
        borderColor:'green'
    }
})