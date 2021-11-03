import {View} from 'react-native';
import React from "react";  

export default function Space({value, isHorizontal}){
    return <View style={isHorizontal? {paddingHorizontal: value*4}: {paddingVertical: value*4}}/>;
}