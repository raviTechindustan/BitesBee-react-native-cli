import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../Utilities/DeviceDimensions'

function WelcomeBitesBee({navigation}) {
   return(
       <View style={{backgroundColor:'white',flex:1}}>
          <View style={styles.beesLogoView}>
            <Image
               style={{width:widthPercentageToDP(20), height:heightPercentageToDP(12), borderRadius:10,resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/loginlogo.png')}
               />
          </View>
          <View style={styles.welcomeTextView}>
            <Text style={styles.welcomeText}>Welcome to BitesBee</Text>
          </View>
          <View style={{height:heightPercentageToDP(30),marginTop:heightPercentageToDP(6)}}>
          <ScrollView style={styles.infeature} horizontal={true} showsHorizontalScrollIndicator={false} automaticallyAdjustContentInsets={true}>
               <Image
               style={{width:widthPercentageToDP(60),height:heightPercentageToDP(30),resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/couponfoodimage.png')}
               />
               <Image
               style={{width:widthPercentageToDP(60),height:heightPercentageToDP(30),resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/foodimage1.png')}
               />
               <Image
               style={{width:widthPercentageToDP(60),height:heightPercentageToDP(30),resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/foodimage2.png')}
               />
               <Image
               style={{width:widthPercentageToDP(60),height:heightPercentageToDP(30),resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/couponfoodimage.png')}
               />
               <Image
               style={{width:widthPercentageToDP(60),height:heightPercentageToDP(30),resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/foodimage1.png')}
               />
               <Image
               style={{width:widthPercentageToDP(60),height:heightPercentageToDP(30),resizeMode: 'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/foodimage2.png')}
               />
            
            </ScrollView>
          </View>
          
          <View style={styles.customTextView}>
            <Text style={styles.thanksText}>Thanks for installing this app </Text>
            <Text style={styles.thanksText2}>and for gettig coupon</Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Tinder')}
            >
            <Text style={styles.btnText} >Get a coupon code</Text>
            </TouchableOpacity>
          </View>
       </View>
   )
}


const styles = StyleSheet.create({

   beesLogoView: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:heightPercentageToDP(8),
      
   },
   welcomeTextView: {
      alignItems:'center',
      marginTop:heightPercentageToDP(4)
   },
   welcomeText: {
      fontSize:heightPercentageToDP(3.5),
      fontWeight:'bold'
   },
   customTextView: {
      
      alignItems:'center',
      marginTop:heightPercentageToDP(4)
   },
   thanksText: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      color:"grey",
      fontWeight:'bold'
   },
   thanksText2: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      marginTop:heightPercentageToDP(0.5),
      fontWeight:'bold',
      color:"grey"
   },
   buttonView: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      marginBottom:heightPercentageToDP(4)
   },
   button: {
      alignItems: 'center',
      backgroundColor: '#ffc107',
      justifyContent:"center",
      borderRadius:50,
      height:heightPercentageToDP(6),
      marginTop:heightPercentageToDP(4)
      },
   btnText: {
      color:"black",
      fontWeight:"bold",
      fontSize:heightPercentageToDP(2.2)
      },
   infeature: {
      
   
   },

})
export default WelcomeBitesBee
