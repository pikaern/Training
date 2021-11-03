import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Input from '../elements/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import StepComponent from '../elements/StepComponent';
import Button from '../elements/Button';
import {DEFAULT, STYLES} from '../utils/styles';
import Space from '../elements/space';


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
 
  const renderStepIndicator = (params) => (
    <Icon {...getStepIndicatorIconConfig(params)} />
);
  dismissFocus=()=>{
    Keyboard.dismiss();
  }

  return(

    <TouchableWithoutFeedback onPress={dismissFocus} accessible={false}>
    <View style={DEFAULT.appContainer}>

      <StepComponent title='Citizen ID Information' navigation={navigation}/>
      <StepIndicator
        customStyles={indicatorStyles}
        currentPosition={0}
        labels={labels}
        stepCount={2}
        renderStepIndicator={renderStepIndicator}
      />
      <Space value={2}/>
      <Text style={STYLES.fontSmall}>Verification</Text>
      <Space value={2}/>
      <View style={DEFAULT.entryFieldContainer}>
        <Input label='NRIC Front' icon='upload' size={40} disable/>
        <Space value={2}/>
        <Input label='NRIC Back'  icon='upload' size={40} disable/>
      </View>

      <Button title="Next" navigation={navigation} nextPage="PersonalInfo" end></Button>
    </View>
    </TouchableWithoutFeedback>
  );
};
