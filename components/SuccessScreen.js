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
import Button from '../elements/Button';


export default function SuccessScreen({navigation}){
  const [inputStyle,setInputStyle]=useState(false);

  onFocus=()=>{
    setInputStyle(true);
  };

  dismissFocus=()=>{
    setInputStyle(false);
    Keyboard.dismiss();
  }
  return(

    <View style={styles.container}>
      <Icon name='check-circle' color='#3365ff' size={150}/>
      <Text style={styles.title}>
        SUCCESS
      </Text>
      <Text style={styles.descriptionText}>
        Your are ready to use Sunline app login now to help you easily save more money.
      </Text>

      <Button title="Done" navigation={navigation} nextPage='Citizen' end></Button>
    </View>

  );
};

const styles=StyleSheet.create({
  container:{
    paddingTop:30,
    padding: 20,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  title:{
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 20,
    textAlign: 'center'
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
    fontSize: 18,
    color: '#999999',
    marginTop: 10,
    marginHorizontal: 20,
    alignSelf: 'center',
    textAlign: 'center',

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
