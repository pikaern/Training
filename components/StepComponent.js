import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from 'react-native';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../components/Button';


export default function StepComponent({navigation, title, description}){
  return(
  <View>
    <TouchableOpacity style={styles.navigator} onPress={()=>navigation.goBack()}>
      <Icon name='chevron-left' size={25} color='#999999'/>
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.descriptionText}>
      {description}
    </Text>
  </View>
);
}

const styles=StyleSheet.create({

  title:{
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
    marginBottom:10
  },
  navigator:{
    marginTop: 20,
    flexWrap: 'wrap',
    width: 30
  },

  descriptionText:{
    fontSize: 14,
    color: '#999999',
    marginTop: 10,
    marginBottom:10
  },

});
