import React,  {useState} from "react";  
import {View, StyleSheet, TouchableOpacity,Text, SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import Button from "../components/Button";

export default function VoucherDetails({navigation, route}){
    const [redeem, setRedeem] = useState(false);
    const [outletsDropdown, setOutletsDropdown] = useState(false);
    const [termsDropdown, setTermsDropdown] = useState(false);

    const {params} = route.params;
   
    toggleOutletDropdown=()=>{
        setOutletsDropdown(!outletsDropdown);
    }

    toggleTermsDropdown=()=>{
        setTermsDropdown(!termsDropdown);
    }

    redeemVoucher=()=>{
        Alert.alert(
            "Please confirm",
            "Are you sure you are redeeming your voucher now? ",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => setRedeem(true) }
            ]
          );
    }
    return(
        <SafeAreaView style={styles.container}>
             <View style={styles.row}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name='angle-left' size={45} color='#3365FF' style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.title}>{params.title}</Text>
            </View>
            <ScrollView>
            <View>
                <View>
                    <Image source={params.background} style={styles.coverImage}/>
                    <Image source={params.logo} style={styles.logo}/>
                </View>
                <Text style={styles.description}>{params.descriptionTitle}</Text>
                <View style={styles.codeContainer}>
                    <View style={styles.promoCode}>
                        <Text style={styles.codeTitle}>PROMO CODE</Text>
                        <Text style={styles.code}>STEA009</Text>
                    </View>
                    <Text style={styles.validity}>Valid until: 29/10/2019</Text>
                </View>
                <View style={styles.instruction}>
                    <Text style={styles.instruction}>Present this to merchant staff for voucher validation. Merchant's staff will validate the voucher by tapping on the button below.</Text>
                </View>
                
                <View style={styles.barcodeContainer}>
                    {!redeem&&
                        <Button title="REDEEM NOW" onPress={this.redeemVoucher}
                        />

                    }
                    {redeem &&
                        <Barcode
                            format="EAN13"
                            value="0123456789012"
                            text="0123456789012"
                            style={{ marginBottom: 40 }}
                            width={3}
                        />
                    }
                </View>
            
                <View style={styles.redeemContainer}>
                    <Text style={styles.redeemTitle}>How to redeem</Text>
                    <View style={styles.row}>
                        <Text style={styles.numbering}>1. </Text>
                        <Text style={styles.redeemDescription}>Go to steaped merchant stall to show them your promo code.</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.dropdownRow} onPress={this.toggleOutletDropdown}>
                    <Text style={styles.dropdownTitle} >Participating Outlets(s)</Text>
                    <Icon name={outletsDropdown? 'chevron-up':'chevron-down'} size={24} color='#3365FF' style={styles.downIcon}/>
                </TouchableOpacity>
                {outletsDropdown &&
                    (
                        <View style={styles.dropdownContainer}>
                            <Text>
                            This voucher is valid until Six months from the date of issuance, and can be redeemed at any Apparel Group stores in UAE
                            This voucher is non-refundable and cannot be exchanged for cash in part or full and is valid for a single transaction only
                            This voucher is not valid during sale or in conjunction with any special promotion
                            Club Apparel points cannot be availed or redeemed while using this voucher
                            Strictly no extension of the expiry date from the date of issue will be allowed
                            The management retains the right to reject any voucher that has been tampered with or found in any way unacceptable
                            We are not responsible if a Gift Voucher is lost, stolen, damaged or destroyed and no replacement will be provided in these circumstances
                            Vouchers cannot be clubbed and used for single transaction
                            This voucher cannot be redeemed in order to purchase gift cards
                            Not applicable for online Purchase
                            </Text>
                        </View>
                    )
                }
                <TouchableOpacity style={styles.dropdownRow} onPress={this.toggleTermsDropdown}>
                    <Text style={styles.dropdownTitle}>Terms and Conditions</Text>
                    <Icon name={termsDropdown? 'chevron-up':'chevron-down'} size={24} color='#3365FF' style={styles.downIcon}/>
                </TouchableOpacity>
                {termsDropdown &&
                    (
                        <View style={styles.dropdownContainer}>
                            <Text>
                            This voucher is valid until Six months from the date of issuance, and can be redeemed at any Apparel Group stores in UAE
                            This voucher is non-refundable and cannot be exchanged for cash in part or full and is valid for a single transaction only
                            This voucher is not valid during sale or in conjunction with any special promotion
                            Club Apparel points cannot be availed or redeemed while using this voucher
                            Strictly no extension of the expiry date from the date of issue will be allowed
                            The management retains the right to reject any voucher that has been tampered with or found in any way unacceptable
                            We are not responsible if a Gift Voucher is lost, stolen, damaged or destroyed and no replacement will be provided in these circumstances
                            Vouchers cannot be clubbed and used for single transaction
                            This voucher cannot be redeemed in order to purchase gift cards
                            Not applicable for online Purchase
                            </Text>
                        </View>
                    )
                }
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        margin:10
    },
    row:{
        flexDirection:'row',
        margin:20
    },
    title:{
        fontSize: 30,
        fontWeight: '400',
        marginLeft:30,
        color: '#3365FF',
        alignSelf:'center'
    
    },
    dropdownTitle:{
        fontSize: 20,
        fontWeight: '400',
        color: '#3365FF',
    
    },
    row:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:20
    },
    coverImage:{
        width: '90%',
        height: 220,
        resizeMode: 'stretch',
        alignSelf:'center',
        marginTop: 10
    },
    logo:{
        width: 50,
        height:50,
        position: 'absolute',
        borderWidth:1,
        borderColor: '#ffffff',
        left: 330,
        top: 200
    },
    description:{
        color: '#3365FF',
        fontWeight: '500',
        fontSize: 18,
        marginTop:50,
        marginHorizontal:35,
        marginBottom:20
    },
    promoCode:{
        backgroundColor:'#d6d6d6',
        width: 300,
        height: 75,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10

    },
    codeContainer:{
        marginTop: 20,
        alignItems: 'center'
    },
    codeTitle:{
        color: '#FF7B00',
        fontSize:16,
        fontWeight:'bold'
    },
    code:{
        fontSize: 30,
        color: '#FF7B00',
        fontWeight:'bold'

    },
    icon:{
        marginLeft: 10
    },
    validity:{
        color:'#666666',
        fontWeight: 'bold'
    },
    redeemTitle:{
        fontWeight: 'bold',
        marginTop:10
    },
    redeemDescription:{
        color: '#666666',
    },
    redeemContainer:{
        padding:30
    },
    numbering:{
        color: '#666666'
    },
    instruction:{
        color:'#666666',
        margin:15
    },
    barcodeContainer:{
        height: 100
    },
    
    dropdownRow: {
        flexDirection: 'row',
        margin:10,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 10
        
    },
    redeemRow:{
        flexDirection:'row'
    },
    dropdownContainer:{
        margin: 20,
    }
})