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
import Icon from 'react-native-vector-icons/FontAwesome';
import StepComponent from '../components/StepComponent';
import Button from '../components/Button';


export default function SetupPasswordScreen({navigation}){

  dismissFocus=()=>{
    Keyboard.dismiss();
  }

  return(

    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <View style={styles.container}>
      <StepComponent title='Setup Your Password' description='Enter your desired password, minimum 6 characters.' navigation={navigation}/>

      <View style={styles.entryFieldContainer}>
        <Input label='Enter New Password'/>
        <Input label='Re-enter New Password'/>
      </View>

      <Button title="Next" navigation={navigation} nextPage='Nickname' end></Button>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles=StyleSheet.create({
  container:{
    padding: 20,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40
  },

  descriptionText:{
    fontSize: 14,
    color: '#999999',
    marginTop: 10,
  },
  navigationIcon:{
    width:20,
    height:20,
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
