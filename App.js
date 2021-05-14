import {StyleSheet, View,} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default function App(props) {
    console.log(props)
    return (
        <NavigationContainer>
            <View style={{flex: 1}}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Tabs}
                                  options={({route}) =>
                                      ({
                                          title: route.name, headerStyle: styles.HeaderStyle,
                                          headerTitleStyle: styles.headerTitleStyle,
                                          headerTintColor: 'red'
                                      })}
                    />
                </Stack.Navigator>
            </View>
        </NavigationContainer>

    );
}
const styles = StyleSheet.create({
    HeaderStyle: {
        backgroundColor: 'red'
    },
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center'
    }
})



