import React,{useState} from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../Utilities/DeviceDimensions'

function Login({navigation}) {
   const [phoneNumber,setPhoneNumber] = useState('+91 ')
   
   function onChangeText(text) {
       const re = /^[0-9\b]+$/;
      if(!re.test(text)){
         setPhoneNumber(text)
      }
      
   }
   return(
     
       <View style={styles.contianer}>
          <View style={styles.foodImageView}>
            <Image
            style={styles.foodImage}
            source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/loginimage.png')}
            />
          </View>
          <View style={styles.beeLogoView}>
            <Image
               style={styles.beeLogo}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/loginlogo.png')}
               />
          </View>
          <View style={styles.LoginTextView}>
            <Text style={styles.LoginText}>
               Log In
            </Text>
          </View>
          <View style={styles.customText}>
            <Text style={styles.enterCustomText}>Enter your phone number we will send you</Text>
            <Text style={styles.enterCustomText}> OTP to verify later</Text>
          </View>
          <View style={styles.phoneTextView}>
            <Text style={{color:'orange'}}>Phone Number</Text>
            <TextInput
               style={styles.inputTypePhone}
               onChangeText={onChangeText}
               value={phoneNumber}
               keyboardType={'numeric'}
               maxLength={14}
               
            />
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Verification')}
            >
            <Text style={styles.btnText} >Get OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomImageView}>
             <Image
              style={styles.bottomImage}
              source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/bg.png')}
              />
          </View>
       </View>
   )
}


const styles = StyleSheet.create({
   contianer: {
      backgroundColor:"white",
      flex:1
   },
   foodImageView: {
      flexDirection:'row',
      justifyContent:'flex-end'
   },
   foodImage: {
      width: widthPercentageToDP(60),
      height: heightPercentageToDP(20),
   },
   beeLogoView: {
      flexDirection:'row',
      justifyContent:'center'
   },
   beeLogo: {
      width: widthPercentageToDP(38),
      height: heightPercentageToDP(19),
   },
   customText: {
      flex:1,
      alignItems:'center',
      marginTop:heightPercentageToDP(4)
   },
   enterCustomText: {
      fontSize:heightPercentageToDP(2.1),
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      color:"grey",
      fontWeight:'bold'
   },
   LoginTextView: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:heightPercentageToDP(1)
   },
   LoginText: {
      fontSize:heightPercentageToDP(4.5),
      fontWeight:'bold'
   },
   phoneTextView: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      marginTop:heightPercentageToDP(5),
      
   },
   inputTypePhone: {
      height: 40, 
      borderColor: 'black', 
      color:'black',
      fontWeight:'bold',
      fontSize:16,
      borderBottomWidth: 1,
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
      fontSize:heightPercentageToDP(2.5)
   },
   bottomImageView: {
      flex:1,
      flexDirection:'row',
      justifyContent:"center",
      marginTop:heightPercentageToDP(8),
      
   },
   bottomImage: {
      width:widthPercentageToDP(100),
      height:heightPercentageToDP(18), 
      
   }
})
export default Login
