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
  Keyboard,
  TextInput
} from 'react-native';
import Input from '../elements/Input';
import StepComponent from '../elements/StepComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../elements/Button';
import getImageForPaymentMethod from '../utils/getImageForPaymentMethod';



export default function TransactionDetails({navigation, route}){
  const {params} = route.params;
  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.navigator} onPress={()=>navigation.goBack()}>
          <Icon style={styles.icon} name='chevron-left' size={20} color='#999999'/>
        </TouchableOpacity>
        <Text style={styles.centerTitle}>TransactionsDetails</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.upperContainer}>
          <View style={styles.payment}>
            <Text style={styles.myr}>MYR</Text>
            <Text style={styles.total}>{params.amount}</Text>
            <Text style={{fontSize: 20}}>{params.cashOut? '+' : '-'}</Text>
          </View>
          <Text>{params.title}</Text>
          <Text>{params.status} | {params.date} {params.time}</Text>
        </View>

        <View style={styles.lowerContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Merchant Name</Text>
            <Text style={styles.data}>{params.merchant}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Posting Date</Text>
            <Text style={styles.data}>{params.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Payment Mode</Text>
            <View style={styles.row}>
              <Image source={getImageForPaymentMethod(params.method)} style={styles.methodLogo}/>
              <Text style={styles.data}>**** {params.account}</Text>
            </View>
          </View>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentStyle}>PAYMENT</Text>
        </View>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      </View>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    paddingTop:70,
    padding: 20,
    backgroundColor:'#F7F7F7',
    flex: 1,
    paddingBottom: 40
  },
  data:{
    fontSize:15
  },
  label:{
    color:'#666666',
    fontSize: 15,
    justifyContent: 'center',
  },
  paymentStyle:{
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  logo:{
    position:'absolute'
  },
  methodLogo:{
    height:30,
    width: 45,
    resizeMode: 'stretch',
    marginRight: 10
  },
  contentContainer:{
    alignItems: 'center',
    paddingVertical: 20
  },
  lowerContainer:{
    height:150,
    backgroundColor: '#ffffff',
    width:'100%',
    marginTop:5,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  paymentContainer:{
    backgroundColor: '#FF7B00',
    height: 30,
    width: 150,
    borderRadius: 40,
    position:'absolute',
    top: 180,
    justifyContent: 'center'
  },
  filterContainer:{
    width: '100%',
    backgroundColor: '#ffffff',
    height: 50,
    borderRadius: 10,
    marginVertical: 25,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  upperContainer:{
    height: 150,
    backgroundColor: '#ffffff',
    width:'100%',
    marginTop:25,
    paddingTop: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20

  },
  transactionContainer:{
    marginVertical: 5,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10

  },
  centerTitle:{
    alignSelf:'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 20,
    right: 20,
    marginBottom: 20
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
  inlineMargin:{
    marginHorizontal: 10
  },
  date:{
    color:'#999999',
    fontSize: 14,
    fontWeight: 'bold'
  },
  navigator:{
    width: 30,
  },
  textInput:{
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize:16
  },
  transactionList:{
    backgroundColor: '#ffffff',
    height: 60,
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  transactionText:{
    fontSize: 16
  },
  status:{
    color:'#49BF83',
  },
  statusPosition:{
    justifyContent: 'flex-end',
    flex:1,
    alignItems: 'flex-end'

  },
  payment:{
    flexDirection: 'row',
    alignSelf: 'center',
  },
  myr:{
    color:'#000000',
    alignSelf: 'flex-end',
    fontWeight: 'bold'
  },
  total:{
    fontSize: 20,
    marginHorizontal: 5,
    color:'#000000',
    fontWeight: 'bold'
  },
  cashIn:{
    color:'#49BF83',
  },
  cashOut:{
    color:'#ff0000',
    fontSize: 20,
  }

});
