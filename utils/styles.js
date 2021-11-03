import {StyleSheet, Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');


export const SIZE={
    xxlarge:  30,
    xlarge:  26,
    large:24,
    regular: 20,
    medium: 18,
    small:  16,
    xsmall: 14
}


export const COLOR={
    blue: '#3365FF',
    darkgrey: '#666666',
    grey: '#999999',
    green: '#49BF83',
    orange: '#FF7B00',
    purple: '#8763F4',
    cyan: '#06C4C9',
    backgroundgrey: '#F7F7F7',
    white:'#FFFFFF',
    black:'#000000',
    red: '#f00'
};


export const STYLES=StyleSheet.create({
    //font size
    fontXXLarge:{
        fontSize: SIZE.xxlarge
    },
    fontXLarge:{
        fontSize:SIZE.xlarge
    },
    fontLarge:{
        fontSize: SIZE.large
    },
    fontRegular:{
        fontSize: SIZE.regular
    },
    fontMedium:{
        fontSize: SIZE.medium
    },
    fontSmall:{
        fontSize: SIZE.small
    },
    fontXSmall:{
        fontSize: SIZE.xsmall
    },
    
    //font color
    fontGrey:{
        color: COLOR.grey
    },
    fontOrange:{
        color: COLOR.orange
    },
    fontWhite:{
        color: COLOR.white
    },
    fontBlue:{
        color: COLOR.blue
    },

    //background color
    backgroundGrey:{
        backgroundColor: COLOR.backgroundgrey
    },
    backgroundWhite:{
        backgroundColor: COLOR.white
    },
    backgroundPurple:{
        backgroundColor: COLOR.purple
    },
    backgroundOrange:{
        backgroundColor: COLOR.orange
    },
    backgroundCyan:{
        backgroundColor: COLOR.cyan
    },
    backgroundGreen: {
        backgroundColor: COLOR.green
    },
    //border 
    borderBlack:{
        borderColor: COLOR.black
    },
    borderBlue:{
        borderColor: COLOR.blue
    },
    borderRed:{
        borderColor: COLOR.red,
    },

    //flex
    row:{
        flexDirection: 'row'
    }

});

export const DEFAULT=StyleSheet.create({
      //container styles
    appContainer:{
        flex:1,
        backgroundColor: STYLES.backgroundGrey,
        paddingHorizontal: SCREEN_WIDTH*0.05,
        paddingVertical:SCREEN_HEIGHT*0.05
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover'
    },
    strechImage:{
        resizeMode: 'stretch'
    },
    centerContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading:{
        ...STYLES.fontXLarge,
        fontWeight:'600'
    },
    subheading:{
        ...STYLES.fontMedium,
        fontWeight: '500'
    },
    textDescription:{
        ...STYLES.fontGrey,
        ...STYLES.fontXSmall
    },
    entryFieldContainer:{
        marginVertical: 10,
        width: "100%",
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 8
    },
    icon:{
       position: 'absolute',
    
    },
    inputFieldContainer:{
        width: "100%",
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
      },
    
    textFieldContainer:{
        width: '100%',
        alignItems: 'flex-end',
    },
});