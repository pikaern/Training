import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Button({title, alt, navigation, nextPage, end, onPress}){
  return(

      <TouchableOpacity onPress={nextPage?()=>navigation.navigate(nextPage):onPress} style={[styles.buttonContainer, alt? styles.btnAltColor:styles.btnColor, end? styles.btnEnd: null]}>
        <Text style={[styles.buttonText, alt? styles.btnAltColor: styles.btnColor]}>{title}</Text>
      </TouchableOpacity>

  );
};
const styles=StyleSheet.create({
  buttonContainer:{
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 15,
    minWidth: 350,
    height: 55,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    marginVertical: 10,

  },
  buttonText:{
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  btnColor:{
    backgroundColor: '#3365FF',
    color:'#FFFFFF'
  },
  btnAltColor:{
    backgroundColor: '#FFFFFF',
    color: '#3365FF'
  },
  btnEnd:{
    alignSelf: 'center',
    bottom:20,
    position: 'absolute',


  },
});
