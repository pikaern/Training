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
import {Input} from 'react-native-elements';

import Button from '../components/Button';


export default function NicknameScreen({navigation}){
  const [inputStyle,setInputStyle]=useState(false);

  onFocus=()=>{
    setInputStyle(true);
  };

  dismissFocus=()=>{
    setInputStyle(false);
    Keyboard.dismiss();
  }
  return(
    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <View style={styles.container}>

      <TouchableOpacity style={styles.navigator} onPress={()=>navigation.goBack()}>
        <Image source={require('../assets/arrow.png')} style={styles.navigationIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}>Enter Your Nickname</Text>
      <Text style={styles.descriptionText}>
        How should we call you?
      </Text>
      <View style={styles.textFieldContainer}>
        <Input
          label='Enter your nickname'
          labelStyle={styles.label}
          inputContainerStyle={inputStyle?styles.inputFocusContainer:styles.inputContainer}
          labelStyle= {inputStyle? styles.focusLabel:styles.label}

        onFocus={onFocus}
        />
      </View>

      <Button title="Next" navigation={navigation} nextPage='Citizen' end></Button>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles=StyleSheet.create({
  container:{
    padding: 30,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40
  },
  title:{
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 20
  },
  navigator:{
    marginTop: 20,
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
  },
  navigationIcon:{
    width:20,
    height:20,
  },
  justifyEnd:{
    alignSelf: 'flex-end'
  },
  textFieldContainer:{
    marginVertical: 10,
    width: "100%",
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10
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
  }
});
