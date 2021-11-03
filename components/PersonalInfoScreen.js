import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from '../elements/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../elements/Button';
import StepIndicator from 'react-native-step-indicator';
import DropDownPicker from 'react-native-dropdown-picker';
import StepComponent from '../elements/StepComponent';
import { DEFAULT, STYLES } from '../utils/styles';
import Space from '../elements/space';

//materialTextField
const indicatorStyles=
{
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: '#3365ff',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#3365ff',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#3365ff',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#f7f7f7',
  stepIndicatorCurrentColor: '#f7f7f7',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#3365ff',
  labelSize: 13,
  currentStepLabelColor: '#666666'
};



const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}) => {
  const iconConfig = {
    name: 'circle',
    color: stepStatus === 'finished' ? '#3365ff' : '#3365ff',
    size: 15,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'circle';
      iconConfig.color= '#3365ff';
      iconConfig.size = 15;
      break;
    }
    case 1: {
      iconConfig.name = 'check';
      iconConfig.color= '#3365ff';
      iconConfig.size = 15;
      break;
    }

  }
  return iconConfig;
};


export default function PersonalInfoScreen({navigation}){
  const labels=["Step 1", "Step 2"];
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]);

  const [titleOpen, setTitleOpen] = useState(false);
  const [titleValue, setTitleValue] = useState(null);
  const [title, setTitle] = useState([
    {label: 'Mr.', value: 'mr'},
    {label: 'Ms', value: 'ms'},
    {label: 'Mrs', value: 'mrs'},
  ]);
  const [birthPlaceOpen, setBirthPlaceOpen] = useState(false);
  const [birthPlaceValue, setBirthPlaceValue] = useState(null);
  const [birthPlace, setBirthPlace] = useState([
    {label: 'Malaysia', value: 'malaysia'},
    {label: 'Singapore', value: 'singapore'},
    {label: 'Thailand', value: 'thailand'},
  ]);

  const [nationalityOpen, setNationalityOpen] = useState(false);
  const [nationalityValue, setNationalityValue] = useState(null);
  const [nationality, setNationality] = useState([
    {label: 'Malaysia', value: 'malaysia'},
    {label: 'Singapore', value: 'singapore'},
    {label: 'Thailand', value: 'thailand'},
  ]);
  const renderStepIndicator = (params) => (
    <Icon {...getStepIndicatorIconConfig(params)} />
  );


  const [focusStyle,setFocusStyle]=useState(false);
  let focus=false;

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);



  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };


  onFocus=()=>{
    setFocusStyle(true);
  }
  dismissFocus=()=>{
    setFocusStyle(false);
    Keyboard.dismiss();

  }
  showModal=()=>{
    setHidden(false);
  }


  return(
    <View style={DEFAULT.appContainer}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={dismissFocus} accessible={false} >
        <View>
          <StepComponent title='Personal Information' navigation={navigation}/>
          <StepIndicator
            customStyles={indicatorStyles}
            currentPosition={0}
            labels={labels}
            stepCount={2}
            renderStepIndicator={renderStepIndicator}
          />
          <Space value={2}/>
          <Text style={STYLES.fontMedium}>
            Personal Information
          </Text>
          <Space value={2}/>
          <View style={DEFAULT.entryFieldContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={DEFAULT.inputFieldContainer}>
              <DropDownPicker
                open={genderOpen}
                value={genderValue}
                items={gender}
                setOpen={setGenderOpen}
                setValue={setGenderValue}
                setItems={setGender}
                style={styles.dropDownStyle}
                placeholder= ''
                dropDownDirection="TOP"
              />
            </View>
            <Text>Title</Text>
            <DropDownPicker
              open={titleOpen}
              value={titleValue}
              items={title}
              setOpen={setTitleOpen}
              setValue={setTitleValue}
              setItems={setTitle}
              style={styles.dropDownStyle}
              placeholder= ''
              dropDownDirection="TOP"
            />
            <Input label='Full Name (complete as per IC)' />
            <Input label='Date of Birth'/>
        
            <Text>Place of Birth</Text>
            <DropDownPicker
              open={birthPlaceOpen}
              value={birthPlaceValue}
              items={birthPlace}
              setOpen={setBirthPlaceOpen}
              setValue={setBirthPlaceValue}
              setItems={setBirthPlace}
              style={styles.dropDownStyle}
              placeholder= ''
              dropDownDirection="TOP"
            />

            <Text>Nationality</Text>
            <DropDownPicker
              open={nationalityOpen}
              value={nationalityValue}
              items={nationality}
              setOpen={setNationalityOpen}
              setValue={setNationalityValue}
              setItems={setNationality}
              style={styles.dropDownStyle}
              placeholder= ''
              dropDownDirection="TOP"
            />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <Button title="Next" navigation={navigation} nextPage="SuccessScreen" end></Button>

  </View>

  );
};
const textInput={
  height: 40,
  width:'100%',
  borderBottomWidth: 1,
  borderColor:'#000000',
  marginBottom: 5
}


const label={
  fontWeight: 'normal',
  fontSize:14,
  color: '#000000',
  marginTop:20,
  marginHorizontal:15
}

const styles=StyleSheet.create({
 
  dropDownStyle:{
    borderWidth: 0,
    borderBottomWidth: 1,
    ...DEFAULT.inputFieldContainer
  },
  modalStyle:{
    backgroundColor: '#ffffff',
    width: 300,
    flexWrap: 'wrap',
    alignSelf: 'center',
    borderWidth: 1,
    position: 'absolute',
    flex: 1
  },
  modalListStyle: {
    width: '100%',
    height:50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#999999'
  },
  descriptionText:{
    fontSize: 20,
    color: '#000000',
    marginVertical: 10,
  },

  verifyFieldContainer:{
    marginVertical: 10,
    width: "100%",
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15
  },
  label:{
    ...label
  },
  focusLabel:{
    ...label,
    color: '#3365FF',

  },
  hiddenModal:{
    visibility: 'hidden',
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
  },
});
