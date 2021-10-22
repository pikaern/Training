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
import StepIndicator from 'react-native-step-indicator';
import StepComponent from '../components/StepComponent';
import Button from '../components/Button';

const indicatorStyles=
{
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#3365ff',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#f7f7f7',
  stepIndicatorCurrentColor: '#f7f7f7',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#3365FF'
}
const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const iconConfig = {
    name: 'circle',
    color: stepStatus === 'finished' ? '#999999' : '#999999',
    size: 15,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'check';
      iconConfig.color= '#3365ff';
      break;
    }
    case 1: {
      iconConfig.name = 'circle';
      iconConfig.size = 15;
      break;
    }

  }
  return iconConfig;
};

export default function CitizenScreen({navigation}){
  const labels=["Step 1", "Step 2"];
  const [inputStyle,setInputStyle]=useState(false);
  const [inputStyle2,setInputStyle2]=useState(false);


  const renderStepIndicator = (params: any) => (
    <Icon {...getStepIndicatorIconConfig(params)} />
);
  dismissFocus=()=>{
    Keyboard.dismiss();
  }



  return(

    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <View style={styles.container}>

      <StepComponent title='Citizen ID Information' navigation={navigation}/>

      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={indicatorStyles}
          currentPosition={0}
          labels={labels}
          stepCount={2}
          renderStepIndicator={renderStepIndicator}
        />
      </View>
      <Text style={styles.descriptionText}>
        Verification
      </Text>
      <View style={styles.entryFieldContainer}>
        <Input label='NRIC Front' icon='upload' size={30} disable/>
        <Input label='NRIC Back'  icon='upload' size={30} disable/>
      </View>

      <Button title="Next" navigation={navigation} nextPage="PersonalInfo" end></Button>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles=StyleSheet.create({
  container:{
    paddingTop: 30,
    padding: 20,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40
  },
  descriptionText:{
    fontSize: 20,
    color: '#000000',
    marginVertical: 10,
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
