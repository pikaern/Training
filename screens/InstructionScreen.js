import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';


import StepComponent from '../components/StepComponent';
import Button from '../components/Button';

const descriptions=[
  {
    id:1,
    title: "01. Verify Phone Number",
    description: "Fill in your phone number and follow cross verfication",
    color: "#49BF83",
    image: require('../assets/phone.png'),
  },
  {
    id:2,
    title: "02. Setup Password",
    description: "Set Your password for login and verfication.",
    color: "#FF7B00",
    image: require('../assets/lock.png'),
  },
  {
    id:3,
    title: "03. Setup Nickname",
    description: "Set your nickname to display and distinguish",
    color: "#8763F4",
    image: require('../assets/account.png'),
  },
  {
    id:4,
    title: "04. Complete Security Login",
    description: "Choose your security identity for login",
    color: "#06C4C9",
    image: require('../assets/check.png'),
  },
];

export default function InstructionScreen({navigation}){

  return(
    <View style={styles.container}>
      <StepComponent title='Register Instruction' navigation={navigation}/>
        {
          descriptions.map((item) => (
          <View style={{flex: 1}} key={item.id}>
            <View style={styles.row}>

                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {item.description}
                  </Text>
                </View>
                  <View style={[styles.iconContainer, {backgroundColor: item.color}]}>
                    <Image
                      source={item.image}
                      style={styles.icon}/>
                  </View>
            </View>
          </View>
        ))
      }
        <Button title="Register Now" navigation={navigation} nextPage='VerifyPhone'></Button>
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
    alignSelf: 'flex-start'

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
    left:20
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
  }
});
