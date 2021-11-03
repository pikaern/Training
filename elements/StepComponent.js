import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Space from '../elements/space';
import {DEFAULT,STYLES} from '../utils/styles';


export default function StepComponent({navigation, title, description}){
  return(
  <View>
    <TouchableOpacity  onPress={()=>navigation.goBack()}>
      <Icon name='angle-left' size={35} color='#666666'/>
    </TouchableOpacity>
    <Space value={1}/>
    <Text style={DEFAULT.heading}>{title}</Text>
    <Space value={1}/>
    <Text style={DEFAULT.textDescription}>
      {description}
    </Text>
    <Space value={1}/>
  </View>
);
}

