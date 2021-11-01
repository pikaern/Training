import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import InstructionScreen from './screens/InstructionScreen';
import VerifyPhoneScreen from './screens/VerifyPhoneScreen';
import SetupPasswordScreen from './screens/SetupPasswordScreen';
import NicknameScreen from './screens/NicknameScreen';
import CitizenScreen from './screens/CitizenScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import SuccessScreen from './screens/SuccessScreen';
import RecentTransactionScreen from './screens/RecentTransactionScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';
import HomePage from './screens/HomePage';
import VoucherList from './screens/VoucherList';
import VoucherOutlook from './screens/VoucherOutlook';
import VoucherDetails from './screens/VoucherDetails';

const Stack=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Instruction" component={InstructionScreen}/>
        <Stack.Screen name="VerifyPhone" component={VerifyPhoneScreen}/>
        <Stack.Screen name="SetupPassword" component={SetupPasswordScreen}/>
        <Stack.Screen name="Nickname" component={NicknameScreen}/>
        <Stack.Screen name="Citizen" component={CitizenScreen}/>
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
        <Stack.Screen name="RecentTransaction" component={RecentTransactionScreen}/>
        <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen}/>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="VoucherList" component={VoucherList}/>
        <Stack.Screen name="VoucherOutlook" component={VoucherOutlook}/>
        <Stack.Screen name="VoucherDetails" component={VoucherDetails}/>

      </Stack.Navigator>
    </NavigationContainer>
);
};
