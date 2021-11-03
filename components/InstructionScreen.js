import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {DEFAULT, STYLES} from '../utils/styles';
import Space from '../elements/space';
import StepComponent from '../elements/StepComponent';
import Button from '../elements/Button';


const descriptions=[
  {
    id:1,
    title: "01. Verify Phone Number",
    description: "Fill in your phone number and follow cross verfication",
    color: STYLES.backgroundGreen,
    image: require('../assets/phone.png'),
  },
  {
    id:2,
    title: "02. Setup Password",
    description: "Set Your password for login and verfication.",
    color: STYLES.backgroundOrange,
    image: require('../assets/lock.png'),
  },
  {
    id:3,
    title: "03. Setup Nickname",
    description: "Set your nickname to display and distinguish",
    color: STYLES.backgroundPurple,
    image: require('../assets/account.png'),
  },
  {
    id:4,
    title: "04. Complete Security Login",
    description: "Choose your security identity for login",
    color: STYLES.backgroundCyan,
    image: require('../assets/check.png'),
  },
];

export default function InstructionScreen({navigation}){

  return(
    <View style={DEFAULT.appContainer}>
      
      <StepComponent title='Register Instruction' navigation={navigation}/>
      <ScrollView>
        <View>
        {
          descriptions.map((item) => (
          <View style={DEFAULT.centerContainer}>
          <View style={{flex: 1}} key={item.id}>
            <View style={customStyles.row}>
                <View style={customStyles.descriptionContainer}>
                  <Text style={DEFAULT.subheading}>
                    {item.title}
                  </Text>
                  <Space value={2}/>
                  <Text style={DEFAULT.textDescription}>
                    {item.description}
                  </Text>
                </View>
                  <View style={[customStyles.iconContainer, item.color]}>
                    <Image
                      source={item.image}
                      style={customStyles.icon}/>
                  </View>
            </View>
          </View>
          <Space value={3}/>
          </View>
          
        ))
      }
      </View>
      </ScrollView>
        <Button title="Register Now" navigation={navigation} nextPage='VerifyPhone'></Button>
    </View>
  );
};

const customStyles=StyleSheet.create({
  iconContainer:{
    width: 70,
    height: 70,
    borderRadius: 20,
    ...DEFAULT.centerContainer,
    position: 'absolute',
    right: -30,
  },
  icon:{
    width: 40,
    height: 40,
  },
  descriptionContainer:{
    backgroundColor: "#FFFFFF",
    width: 315,
    height: 120,
    borderRadius: 20,
    paddingLeft: 60,
    paddingRight: 20,
    paddingVertical: 20,
  },
  row:{
    flexDirection: 'row-reverse',
  },
});
