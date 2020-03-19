import React,{useState} from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity,KeyboardAvoidingView  } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../Utilities/DeviceDimensions'

function Verification({navigation}) {
   const[code,setCode]= useState('')

   return(
      <KeyboardAvoidingView  style={styles.contianer}>
          <View style={styles.phonelogo}>
             <Image
              style={{width:widthPercentageToDP(40),height:heightPercentageToDP(18),resizeMode: 'contain'}}
              source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/otp.png')}
              />
          </View>
          <View style={styles.VerificationTextView}>
            <Text style={styles.VerificationText}>
               Verification
            </Text>
         </View>
         <View style={styles.customText}>
            <Text style={styles.enterText}>Enter the verification code we just sent you</Text>
            <Text style={styles.enterText2}> on your phone number</Text>
         </View>
         <View style={styles.inputView}>
               <TextInput
               style={styles.InputForm}
               // onChangeText={text => setCode(text)}
               maxLength={1}
               autoFocus={true}
               keyboardType={'numeric'}
               />
               <TextInput
               style={styles.InputForm}
               //  onChangeText={text => setCode(text)}
                maxLength={1}
                keyboardType={'numeric'}
               />
               <TextInput
                  style={styles.InputForm}
                   //onChangeText={text => onChangeText(text)}
                   maxLength={1}
                   keyboardType={'numeric'}
               />
               <TextInput
                  style={styles.InputForm}
                   //onChangeText={text => onChangeText(text)}
                   maxLength={1}
                   keyboardType={'numeric'}
               />
               <TextInput
                  style={styles.InputForm}
                   //onChangeText={text => onChangeText(text)}
                   maxLength={1}
                   keyboardType={'numeric'}
               />
               <TextInput
                  style={styles.InputForm}
                   //onChangeText={text => onChangeText(text)}
                   maxLength={1}
                   keyboardType={'numeric'}
               />
         </View>

         <View style={styles.proceedButtonView}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => navigation.navigate('GetCoupon')}
               >
               <Text style={styles.btnText} >Proceed</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.bottomImageView}>
             <Image
              style={styles.bottomImage}
              source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/bg.png')}
              />
          </View>
          </KeyboardAvoidingView >
      
   )
}


const styles = StyleSheet.create({
   contianer: {
      backgroundColor:"white",
      flex:1
   },
   phonelogo: {
      flexDirection:'row',
      justifyContent:"center",
      marginTop:heightPercentageToDP(2)
   },
   VerificationTextView: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:heightPercentageToDP(6)
   },
   VerificationText: {
      fontSize:heightPercentageToDP(4.2),
      fontWeight:'bold'
   },
   customText: {
      alignItems:'center',
      marginTop:heightPercentageToDP(4)
   },
   enterText: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      color:"grey",
      fontWeight:'bold'
   },
   enterText2: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10),
      marginTop:heightPercentageToDP(0.5),
      color:"grey",
      fontWeight:'bold'
   },
   inputView: {
      flexDirection:'row',
      marginLeft:widthPercentageToDP(3),
      marginRight:widthPercentageToDP(3),
      marginTop:heightPercentageToDP(4),
      alignItems:'center',
      justifyContent:'center'
   },
   proceedButtonView: {
      marginLeft:widthPercentageToDP(10),
      marginRight:widthPercentageToDP(10)
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
      InputForm: {
         textAlign:'center',
         fontSize:20,
         borderRadius:12,
         height:heightPercentageToDP(8),
         width:widthPercentageToDP(12),
         margin:widthPercentageToDP(2),
         borderWidth:2,
         borderColor: '#0000000f',
         shadowColor: "#000",
         shadowOpacity: 0.43,
         shadowRadius: 9.51,
         shadowColor: "black", 
         shadowOffset: {
            width: 0,
            height: 7,
         }, 
         elevation: 0,    
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

export default Verification;
