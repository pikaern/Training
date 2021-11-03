import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Input from '../elements/Input';
import StepComponent from '../elements/StepComponent';
import {DEFAULT} from '../utils/styles';
import Button from '../elements/Button';


export default function NicknameScreen({navigation}){

  dismissFocus=()=>{
    Keyboard.dismiss();
  }
  
  return(
    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
      <View style={DEFAULT.appContainer}>
        <StepComponent title='Enter Your Nickname' description='How should we call you?' navigation={navigation}/>

        <View style={DEFAULT.entryFieldContainer}>
          <Input label='Enter your nickname'/>
        </View>

        <Button title="Next" navigation={navigation} nextPage='Citizen' end></Button>
      </View>
    </TouchableWithoutFeedback>
  );
};


