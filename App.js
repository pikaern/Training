import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import InstructionScreen from './components/InstructionScreen';
import VerifyPhoneScreen from './components/VerifyPhoneScreen';
import SetupPasswordScreen from './components/SetupPasswordScreen';
import NicknameScreen from './components/NicknameScreen';
import CitizenScreen from './components/CitizenScreen';
import PersonalInfoScreen from './components/PersonalInfoScreen';
import SuccessScreen from './components/SuccessScreen';
import RecentTransactionScreen from './components/RecentTransactionScreen';
import TransactionDetailsScreen from './components/TransactionDetailsScreen';
import HomePage from './components/HomePage';
import VoucherList from './components/VoucherList';
import VoucherOutlook from './components/VoucherOutlook';
import VoucherDetails from './components/VoucherDetails';

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
