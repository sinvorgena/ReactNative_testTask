import {View} from "react-native";
import * as React from "react";

let FlexContainer = (props) => {
    return (
        <View key={props.keyName} style={{flex: props.flexSize,...props.style}}>
            {props.components}
        </View>
    )
}
export default FlexContainer