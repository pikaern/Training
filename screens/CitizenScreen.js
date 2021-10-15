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
import Icon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import {IndicatorStyles} from '../components/StepIndicatorComponent';
import Button from '../components/Button';



export default function CitizenScreen({navigation}){
  const labels=["Step 1", "Step 2"];
  const [inputStyle,setInputStyle]=useState(false);
  const [inputStyle2,setInputStyle2]=useState(false);
  onFocus=()=>{
    setInputStyle(true);
    setInputStyle2(false);
  };

  dismissFocus=()=>{
    setInputStyle(false);
    setInputStyle2(false);
    Keyboard.dismiss();
  }

  onFocus2=()=>{
    setInputStyle2(true);
    setInputStyle(false);
  };

  return(

    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <View style={styles.container}>

      <TouchableOpacity style={styles.navigator} onPress={()=>navigation.goBack()}>
        <Image source={require('../assets/arrow.png')} style={styles.navigationIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}>Citizen ID Information</Text>

      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={IndicatorStyles}
          currentPosition={0}
          labels={labels}
          stepCount={2}
          renderStepIndicator={({position,stepstatus})=>(<Icon name='circle' size={10} color='#999999'/>)}
        />
      </View>
      <Text style={styles.descriptionText}>
        Verification
      </Text>
      <View style={styles.textFieldContainer}>
        <Input
          label='NRIC Front'
          labelStyle={styles.label}
          inputContainerStyle={inputStyle?styles.inputFocusContainer:styles.inputContainer}
          labelStyle= {inputStyle? styles.focusLabel:styles.label}
          onFocus={onFocus}
          rightIcon={
            <Icon name='upload'
              size={20}
              color='#999999'/>
          }
        />
        <Input
          label='NRIC Back'
          labelStyle={styles.label}
          inputContainerStyle={inputStyle2?styles.inputFocusContainer:styles.inputContainer}
          labelStyle= {inputStyle2? styles.focusLabel:styles.label}
          onFocus={onFocus2}
          rightIcon={
            <Icon name='upload'
              size={20}
              color='#999999'/>
          }
        />
      </View>

      <Button title="Next" navigation={navigation}end></Button>
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
    fontSize: 20,
    color: '#000000',
    marginVertical: 10,
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
