import React, {useState} from "react";  
import {View, StyleSheet, Text, TouchableOpacity,ImageBackground, Image, ScrollView} from 'react-native';

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function VoucherList({navigation}){
    const [pending, setPending] = useState(true);
    const [reward, setReward]=useState(false);
    const [rewardEmpty, setRewardEmpty]=useState(false);

    const vouchers=[
        {
            id:1,
            title: "Steaped",
            descriptionTitle: "20% Discount on selected tea",
            expiring: "Expires Today",
            background: require('../assets/steap_cover.jpeg'),
            logo: require('../assets/steap_logo.png'),
        },
        {
            id:2,
            title: "U Mobile",
            descriptionTitle: "Enjoy 10% Off on total bill at any Starbucks Malaysia",
            expiring: "Expiring 10/29/2019",
            background: require('../assets/starbucks-cover.jpeg'),
            logo: require('../assets/umobile_logo.png'),
        }
    ]
    onReward=()=>{
        setReward(true);
        setPending(false);
    }

    onPending=()=>{
        setPending(true);
        setReward(false);
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name='angle-left' size={39} color='#3365FF'/>
                </TouchableOpacity>
                <Text style={styles.title}>My Voucher</Text>
            </View>
            <View style={styles.tabContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={pending? styles.tabFocus: styles.tabButton} onPress={onPending}>
                            <Text style={pending? styles.tabFocusTitle: styles.tabTitle}>Pending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={reward?styles.tabFocus: styles.tabButton} onPress={onReward}>
                        <Text style={reward? styles.tabFocusTitle: styles.tabTitle}>My Reward</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {reward && rewardEmpty &&
            <View>
                <Text style={styles.emptyVoucher}>You currently have no voucher. Check pending list to shake your rewards.</Text>
            </View>
            }
            {reward && !rewardEmpty &&
            <ScrollView>
                <View style={styles.voucherListContainer}>
                    {vouchers.map((item)=>(
                        <TouchableOpacity style={styles.voucherContainer} onPress={()=>navigation.navigate('VoucherDetails',{params: item})}>
                            <View style={styles.voucherImageContainer}>
                                <ImageBackground source={item.background} style={styles.voucherImage}>
                                    <Text style={styles.voucherTitle}>{item.title}</Text>
                                </ImageBackground>
                                <Image style={styles.logoImage} source={item.logo}></Image>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.descriptionTitle}>{item.descriptionTitle}</Text>
                                <Text style={styles.expiring}>{item.expiring}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                    }
                    
                </View>
            </ScrollView>
            }
            {pending &&
                <View style={styles.pendingContainer}>
                    <Text style={styles.pendingTitle}>SHAKE REWARD</Text>
                    <TouchableOpacity style={styles.pendingListContainer} onPress={()=>navigation.navigate('VoucherOutlook')}> 
                        <View style={styles.row}>
                            <Icon name='gift' size={50} color='#3365FF'/>
                            <View style={styles.pendingDescriptionContainer}>
                                <Text style={styles.pendingExpiring}>Expiring 10/29/2019</Text>
                                <Text style={styles.pendingDescription}>Shake your reward to redeem it quickly</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                
            }

        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#F7F7F7'
    },
    title:{
        fontSize: 30,
        fontWeight: '400',
        marginLeft:20,
        color: '#3365FF'
    
    },
    row:{
        flexDirection:'row',
    },
    tabContainer:{
        borderRadius:10,
        borderColor:'#CECBCB',
        borderWidth:1,
        width: '100%',
        height: 70,
        backgroundColor:'#ffffff',
        marginTop: 10,
        justifyContent:'space-around',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 3,
    },
    tabButton:{
        width: '50%',
        justifyContent:'center',
        
        
    },
    tabTitle:{
        textAlign: 'center',
        fontSize: 24,
        color: '#666666'
    },
    tabFocusTitle:{
        textAlign: 'center',
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '600'
        
    },
    tabFocus:{
        width: '50%',
        backgroundColor:'#3365FF',
        height:70,
        justifyContent:'center',
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowColor:'#666666',
        shadowRadius: 3,
        borderBottomColor:'#999999',
        borderBottomWidth:4,
    },
    emptyVoucher:{
        textAlign:'center',
        marginHorizontal: 20,
        fontSize: 20,
        color:'#666666',
        marginVertical: 60
    },
    voucherListContainer:{
        flex: 1,
        margin: 30,
        justifyItems: 'center'
    },
    voucherContainer:{
        backgroundColor:'#ffffff',
        height: 'auto',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        shadowOpacity: 0.7,
        shadowOffset: {width: 0, height:2},
        marginVertical: 10
    },
    voucherImageContainer:{
        height:200,
    },
    voucherImage:{
        resizeMode: 'cover',
        flex:1
    },
    voucherTitle:{
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 0,
        top: 175,
        backgroundColor: "#66666680"
    },
    logoImage:{
        position:'absolute',
        left: 250,
        top: 170,
        height: 60,
        width: 60,
        resizeMode: 'stretch',
        borderColor: "#ffffff",
        borderWidth: 2
    },
    descriptionTitle:{
        fontSize:16,
        
        
    },
    expiring: {
        fontSize: 16,
        color: '#666666',
       
    },
    pendingContainer:{
        flex: 1,
        marginTop: 30
    },
    pendingTitle:{
        color: '#FF7B00',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
    },
    pendingListContainer:{
        backgroundColor: '#ffffff',
        height: 70,
        borderRadius:10,
        marginVertical:10,
        justifyContent: 'center',
        paddingHorizontal:15
    },
    pendingExpiring: {
        alignSelf:'flex-end',
        color: '#666666',
        fontSize:16
        
    },
    pendingDescriptionContainer:{
        flex:1,
        justifyContent: 'space-around',
        paddingLeft:15,
    },
    pendingDescription:{
        fontSize: 16
    },
    descriptionContainer:{
        padding: 10,
        
    }
});