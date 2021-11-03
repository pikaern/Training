import React from 'react';
import {
  ImageBackground
} from 'react-native';

import Button from '../elements/Button';
import {DEFAULT} from '../utils/styles';

export default function LoginScreen({navigation}){
  return(
    <ImageBackground
      source={require('../assets/background.png')}
      style={[DEFAULT.backgroundImage,DEFAULT.centerContainer, DEFAULT.defaultContainer]}>
          <Button title="Login" alt navigation={navigation} nextPage='HomePage'></Button>
          <Button title="Sign Up" navigation={navigation} nextPage='Instruction'></Button>
    </ImageBackground>
  );
};
