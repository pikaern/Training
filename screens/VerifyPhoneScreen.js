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
import StepComponent from '../components/StepComponent';
import Button from '../components/Button';


export default function VerifyPhoneScreen({navigation}){

  dismissKeyboard=()=>{
    Keyboard.dismiss();
  }

  return(
    <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
      <View style={styles.container}>
        <StepComponent title='Verify Phone Number' description='Please enter your phone number to verify your information.' navigation={navigation}/>
        <View style={styles.entryFieldContainer}>
          <Input icon='mobile' iconSize={30} label='Enter your phone number'/>
        </View>
        <Button title="Next" navigation={navigation} nextPage='SetupPassword' end></Button>
      </View>
    </TouchableWithoutFeedback>

  );
};
const textInput={
  height: 40,
  width:'100%',
  borderBottomWidth: 1,
  borderColor:'#000000'
}


const styles=StyleSheet.create({
  container:{
    paddingTop: 30,
    padding: 20,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40
  },
  title:{
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
    marginBottom:10
  },
  navigator:{
    marginTop: 20,
    flexWrap: 'wrap',
    width: 20
  },

  iconContainer:{
    width: 70,
    height: 70,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right:0,

  },
  icon:{
    width: 40,
    height: 40,
  },
  descriptionContainer:{
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: 310,
    height: 120,
    borderRadius: 20,
    paddingLeft: 50,
    paddingRight: 10,
    paddingVertical: 20,
  },
  row:{
    flexDirection: 'row-reverse',
  },
  descriptionTitle:{
    fontSize: 18,
    fontWeight: '500',
  },
  descriptionText:{
    fontSize: 14,
    color: '#999999',
    marginTop: 10,
    marginBottom:10
  },
  navigationIcon:{
    width:20,
    height:20,
  },
  justifyEnd:{
    alignSelf: 'flex-end'
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
  label:{
    fontWeight: 'normal',
    fontSize:14,
    color: '#000000'
  },
  focusLabel:{
    color: '#3365FF',
    fontWeight: 'normal',
    fontSize:14,
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
  }

});
