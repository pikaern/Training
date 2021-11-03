import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from '../elements/Input';
import {DEFAULT} from '../utils/styles';
import StepComponent from '../elements/StepComponent';
import Button from '../elements/Button';
import Space from '../elements/space';


export default function VerifyPhoneScreen({navigation}){

  dismissKeyboard=()=>{
    Keyboard.dismiss();
  }

  return(
    <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
      <View style={DEFAULT.appContainer}>
        <StepComponent title='Verify Phone Number' description='Please enter your phone number to verify your information.' navigation={navigation}/>
        <Space value={1}/>
        <View style={DEFAULT.entryFieldContainer}>
          <Input icon='mobile' iconSize={30} label='Enter your phone number'/>
        </View>
        <Button title="Next" navigation={navigation} nextPage='SetupPassword' end></Button>
      </View>
    </TouchableWithoutFeedback>

  );
};

