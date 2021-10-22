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
  TextInput,
  ScrollView
} from 'react-native';
import Input from '../components/Input';
import StepComponent from '../components/StepComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import getImageForPaymentMethod from '../utils/getImageForPaymentMethod';

const data=[
  [{
      id: 1,
      title: 'TESCO',
      merchant: 'Tesco',
      method: 'masterCard',
      date: '15 Nov 2021',
      time: '01:59 AM',
      status: 'Approved',
      account: '5568',
      amount: 54.15,
      cashIn: false
  },
  {
      id: 2,
      title: 'Topup by Citi Bank',
      merchant: 'Citi Bank',
      method: 'visa',
      date: '15 Nov 2021',
      time: '04:30 AM',
      status: 'Approved',
      account: '5553',
      amount: 500.00,
      cashIn: true
  },
  {
      id: 3,
      title: 'TELCO CASHBACK UAT',
      merchant: 'Telco',
      method: 'masterCard',
      date: '15 Nov 2021',
      time: '01:59 AM',
      status: 'Approved',
      account: '5453',
      amount: 1.55,
      cashIn: true
  }],
  [{
      id: 4,
      title: 'TELCO CASHBACK UAT',
      merchant: 'Telco',
      method: 'unionPay',
      date: '06 Nov 2021',
      time: '12:00 PM',
      status: 'Approved',
      account: '5453',
      amount: 1.55,
      cashIn: true
  },
  {
      id: 5,
      title: "Nando's Nu Sentral",
      merchant: 'Nando',
      method: 'visa',
      date: '06 Nov 2021',
      time: '03:00 PM',
      status: 'Approved',
      account: '5553',
      amount: 106.55,
      cashIn: false
  },
  {
      id: 6,
      title: 'TEALIVE',
      merchant: 'Tealive Sdn Bhd',
      method: 'visa',
      date: '06 Nov 2021',
      time: '04:00 PM',
      status: 'Approved',
      account: '5553',
      amount: 12.05,
      cashIn: false
  }],
  [{
      id:7,
      title: 'ACCOUNT SERVICE FEED',
      merchant: 'GoBiz',
      method: 'unionPay',
      date: '15 Oct 2021',
      time: '01:59 AM',
      status: 'Approved',
      account: '5453',
      amount: 2.50,
      cashIn: false
  }]
];

export default function NicknameScreen({navigation}){


  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.navigator} onPress={()=>navigation.goBack()}>
          <Icon style={styles.icon} name='chevron-left' size={20} color='#999999'/>
        </TouchableOpacity>
        <Text style={styles.centerTitle}>Recent Transactions</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.verticalLine}>|</Text>
        <TextInput placeholder='Filter by keyword'/>
      </View>
      <ScrollView>
      {
        data.map((item)=>(
          <View style={styles.transactionContainer}>
            <Text style={styles.date}>
              {item[0].date}
            </Text>

              {
                item.map((transaction)=>(
                <TouchableOpacity key={transaction.id} onPress={() => {
                  navigation.navigate('TransactionDetails', {
                    params: transaction,
                  })}} >
                  <View style={styles.transactionList}>
                    <Image source={getImageForPaymentMethod(transaction.method)} style={styles.logo}/>
                    <View style={styles.inlineMargin}>
                      <Text style={styles.transactionText}>{transaction.title}</Text>
                      <Text style={styles.transactionText}>**** **** **** {transaction.account}</Text>
                    </View>
                    <View style={styles.statusPosition}>
                      <Text style={styles.status}>{transaction.status}</Text>
                      <View style={styles.payment}>
                        <Text style={styles.myr}>MYR</Text>
                        <Text style={styles.total}>{transaction.amount}</Text>
                        <Text style={transaction.cashIn?styles.cashIn:styles.cashOut}>{transaction.cashIn? '+' : '-'}</Text></View>
                    </View>
                  </View>
                </TouchableOpacity>

            ))}
          </View>

    ))}
    </ScrollView>
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
  verticalLine:{
    position: 'absolute',
    alignSelf: 'center',
    marginHorizontal: 10,
    fontSize:25,
    color:'#49BF83'
  },
  filterContainer:{
    width: '100%',
    backgroundColor: '#ffffff',
    height: 50,
    borderRadius: 10,
    marginVertical: 25,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  transactionContainer:{
    marginVertical: 5,
  },
  row:{
    flexDirection: 'row',
  },
  centerTitle:{
    alignSelf:'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 20,
    right: 20,
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
    flexDirection: 'row'
  },
  myr:{
    color:'#666666',
    flex:1,
    alignSelf: 'flex-end',
    textAlign:'right'

  },
  total:{
    fontSize: 20,
    marginHorizontal: 5,
    color:'#666666'
  },
  cashIn:{
    color:'#49BF83',
    fontSize:20
  },
  cashOut:{
    color:'#ff0000',
    fontSize: 20,
  },
  logo:{
    height:30,
    width: 45,
    resizeMode: 'stretch'
  }


});
