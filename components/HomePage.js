import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

export default function HomePage({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>HOME</Text>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>navigation.navigate('RecentTransaction')} >
                    <View style={styles.nav_icon}>
                        <Icon name='sync-alt' size={24} color='#3365FF'/>
                        <Text style={styles.iconLabel}>Recent Transaction</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={()=>navigation.navigate('VoucherList')}>
                    <View style={styles.nav_icon}>
                        <FontIcon name='certificate' size={24} color='#3365FF'/>
                        <Text style={styles.iconLabel}>My Voucher</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    nav_icon:{
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    row:{
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 60

    },
    title:{
        fontSize: 26,
        fontWeight: '600',
     
        marginBottom:20
    },
    iconLabel:{
        marginTop:10,
        color: '#3365FF',
    }
    
});
