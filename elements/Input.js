import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { DEFAULT, STYLES} from '../utils/styles';
import Space from '../elements/space';

export default function Input({label, icon, iconSize, disable}){
  const [focus,setFocus]=useState(false);

  onFocus=()=>{
    setFocus(true);
  };

  dismissFocus=()=>{
    setFocus(false);
  };

  return(
    <View style={DEFAULT.inputFieldContainer}>
      <Text style={[
        STYLES.fontXSmall,
        focus? STYLES.fontBlue: null
      ]}>
          {label}
      </Text>
      <View style={DEFAULT.textFieldContainer}>
        <Icon style={DEFAULT.icon} name={icon} size={iconSize} color='#000000'/>
        <TextInput editable={!disable} style={[customStyles.textInput, focus? STYLES.borderBlue: null]} onFocus={this.onFocus} onBlur={this.dismissFocus}/>
      </View>
      <Space value={2}/>
    </View>
  );
}

const customStyles=StyleSheet.create({
  textInput:{
    height: 40,
    width:'100%',
    borderBottomWidth: 1,
  },
});
