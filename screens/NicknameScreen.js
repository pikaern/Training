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
  Keyboard
} from 'react-native';
import Input from '../components/Input';
import StepComponent from '../components/StepComponent';

import Button from '../components/Button';


export default function NicknameScreen({navigation}){

  dismissFocus=()=>{

    Keyboard.dismiss();
  }
  return(
    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <View style={styles.container}>
      <StepComponent title='Enter Your Nickname' description='How should we call you?' navigation={navigation}/>

      <View style={styles.entryFieldContainer}>
        <Input label='Enter your nickname'/>
      </View>

      <Button title="Next" navigation={navigation} nextPage='Citizen' end></Button>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles=StyleSheet.create({
  container:{
    paddingTop:30,
    padding: 20,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40
  },

  entryFieldContainer:{
    marginVertical: 10,
    width: "100%",
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8
  },
});
