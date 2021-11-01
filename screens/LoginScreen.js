import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import Button from '../components/Button';

export default function LoginScreen({navigation}){
  return(
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.imageContainer}
      imageStyle={styles.image}>
      <View style={styles.container}>
        <Button title="Login" alt navigation={navigation} nextPage='HomePage'></Button>
        <Button title="Sign Up" navigation={navigation} nextPage='Instruction'></Button>
      </View>
    </ImageBackground>
  );
};

const styles=StyleSheet.create({

  container:{
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 35,
  },
  imageContainer:{
    flex:1,
  },
  image:{
    resizeMode: 'cover',
    height: null,
    width: null,
  },

});
