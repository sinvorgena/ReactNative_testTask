import houseImg from "./assets/house.png";
import documentImg from "./assets/document.png";
import messageImg from "./assets/message.png";
import basketImg from "./assets/basket.png";
import userImg from "./assets/user.png";
import {useEffect, useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./ScreenComponents/HomeScreen";
import SettingsScreen from "./ScreenComponents/SettingScreen";
import cn from 'react-native-classnames';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    let TabsData = [
        {name: 'Home', component: HomeScreen, img: houseImg},
        {name: 'Document', component: SettingsScreen, img: documentImg},
        {name: 'Message', component: SettingsScreen, img: messageImg},
        {name: 'Basket', component: SettingsScreen, img: basketImg},
        {name: 'Profile', component: SettingsScreen, img: userImg}
    ]
    let [tabsJsx, setTabsJsx] = useState([<Tab.Screen
        name='Home'
        component={HomeScreen}
    />])


    useEffect(() => {
        setTabsJsx(TabsData.map(el => <Tab.Screen
            name={el.name}
            key={el.name}
            component={el.component}
            style={{backgroundColor:"red"}}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tabBarIconBox}>
                        <Image source={el.img} resizeMode={'contain'}
                               style={cn(styles,'tabBarIcon', {tabBarIconFocused: focused})}
                        />
                    </View>
                ),
            }}
        />))
    }, [TabsData.length])
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                elevation: 0,
                height: '10%',
                paddingTop: 40,
                backgroundColor: "white"
            }
        }}>
            {tabsJsx}
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBarIconBox:{alignItems: 'center', justifyContent: 'center', top: -20},
    tabBarIcon:{tintColor: '#8a8a8a'},
    tabBarIconFocused:{tintColor: 'green'}
})

export default Tabs