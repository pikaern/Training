import React from 'react';
import {
  View,
  
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Input from '../elements/Input';
import StepComponent from '../elements/StepComponent';
import Button from '../elements/Button';
import {DEFAULT} from '../utils/styles';

export default function SetupPasswordScreen({navigation}){

  dismissFocus=()=>{
    Keyboard.dismiss();
  }

  return(
    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <KeyboardAvoidingView style={DEFAULT.appContainer} behavior="padding" >
      <ScrollView>
      <StepComponent title='Setup Your Password' description='Enter your desired password, minimum 6 characters.' navigation={navigation}/>

      <View style={DEFAULT.entryFieldContainer}>
        <Input label='Enter New Password'/>
        <Input label='Re-enter New Password'/>
      </View>
      </ScrollView>
      <Button title="Next" navigation={navigation} nextPage='Nickname' end></Button>
      
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

