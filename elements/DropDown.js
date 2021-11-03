import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function DropDown({label, icon, iconSize, disable}){
  const [focusStyle,setFocusStyle]=useState(false);
  let focus=false;

  onFocus=()=>{
    setFocusStyle(true);
  }
  dismissFocus=()=>{
    setFocusStyle(false);
  }

  return(
    <View style={styles.verifyFieldContainer}>
      <Text style={focusStyle? styles.focusLabel: styles.label}>{label}</Text>
      <View style={styles.textFieldContainer}>
        <Icon style={styles.icon} name={icon} size={iconSize} color='#000000'/>
        <TextInput editable={!disable} style={focusStyle? styles.focusTextInput: styles.textInput} onFocus={onFocus} onBlur={dismissFocus}/>
      </View>
    </View>
  );
}

const textInput={
  height: 40,
  width:'100%',
  borderBottomWidth: 1,
  borderColor:'#000000',
  marginBottom: 5
}

const label={
  fontWeight: 'normal',
  fontSize:14,
  color: '#000000'
}
const styles=StyleSheet.create({

  verifyFieldContainer:{
    marginVertical: 10,
    width: "100%",
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15
  },
  label:{
    ...label
  },
  focusLabel:{
    ...label,
    color: '#3365FF',

  },
  inputFocusContainer:{
    borderColor:'#3365FF'
  },
  inputContainer:{
    borderColor: '#000000'
  },

  icon:{
    position: 'absolute',

  },
  textFieldContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  focusTextInput:{
    ...textInput,
    borderColor:'#3365dd',
  },
  textInput:{
    ...textInput
  },


});
