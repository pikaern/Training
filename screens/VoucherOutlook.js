import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function VoucherOutlook({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={styles.close}>CLOSE</Text></TouchableOpacity>
            <View style={styles.giftContent}>
                <Text style={styles.awesome}>AWESOME!</Text>
                <Text style={styles.reward}>Check out your reward</Text>
                <View style={styles.voucherContainer}>
                    <Image source={require('../assets/starbucks-cover.jpeg')} style={styles.voucherCover}/>
                    <Image source={require('../assets/umobile_logo.png')} style={styles.voucherLogo}/>
                </View>
                <Text style={styles.voucherTitle}>Starbuck 10% Offering</Text>
                <Text style={styles.voucherDescription}>Redeem your voucher get more starbuck offer</Text>
                <Icon name='gift' size={50} color='#ffffff' style={styles.icon}/>
                <Text style={styles.rewardText}>Rewards</Text>
                <TouchableOpacity><Text style={styles.seeVoucher}>Click to see your voucher now</Text></TouchableOpacity>
            </View>
        </View>
    );

}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#4c4343',
        flex:1,
       
    },
    giftContent:{
        alignItems:'center',
        marginTop: 100,
        padding:20,
        alignContent:'center'
       
       
    },
    close:{
        position: 'absolute',
        alignSelf: "flex-end",
        top: 50,
        right:20,
        color: '#ffffff',
        fontSize: 20,
        fontWeight:'bold'
    },
    awesome:{
        fontSize: 35,
        color: '#06C4C9',
        fontWeight: 'bold'
    },
    reward:{
        color: '#ffc32b',
        fontSize:25,
        fontWeight:'bold',
        margin:20
    },
    voucherCover:{
        width: 400,
        resizeMode:'stretch'
    },
    voucherContainer:{
        height:300,
      
        justifyContent:'center',
        alignItems:'center'
    },
    voucherLogo:{
        height:50,
        width: 50,
        position:'absolute',
        bottom:0,
        top:280,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 5
    },
    voucherTitle:{
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 60,
        color: '#ffffff'
    },
    voucherDescription:{
        fontSize:24,
        textAlign: 'center',
        marginTop: 30,
        color: '#ffffff'
    },
    icon:{
        marginTop:20
    },
    rewardText:{
        color:'#ffffff',
        fontSize:14
    },
    seeVoucher:{
        textDecorationColor: '#FF7B00',
        textDecorationLine: 'underline',
        color: '#FF7B00',
        marginTop: 20
    }
})