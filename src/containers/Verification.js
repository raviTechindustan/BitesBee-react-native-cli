import React,{ useState,useRef,refCallback } from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity,KeyboardAvoidingView  } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../Utilities/DeviceDimensions'

function Verification({navigation}) {
   const firstTextInputRef = useRef(null);
   const secondTextInputRef = useRef(null);
   const thirdTextInputRef = useRef(null);
   const fourthTextInputRef = useRef(null);
   const fifthTextInputRef = useRef(null);
   const sixthTextInputRef = useRef(null);
   const[otpArray,setOtpArray]= useState(['','','','','',''])

   const onOtpChange  = (index) => {
       return value => {
        if (isNaN(Number(value))) {
          // do nothing when a non digit is pressed
          return;
        }
        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);
  
        // auto focus to next InputText if value is not blank
        if (value !== '') {
          if (index === 0) {
            secondTextInputRef.current.focus();
          } else if (index === 1) {
            thirdTextInputRef.current.focus();
          } else if (index === 2) {
            fourthTextInputRef.current.focus();
          } else if (index === 3) {
            fifthTextInputRef.current.focus();
          } else if (index === 4) {
            sixthTextInputRef.current.focus();
          }
         }
      };
    };
  // only backspace key press event is fired on Android
  // to have consistency, using this event just to detect backspace key press and
  // onOtpChange for other digits press
  const onOtpKeyPress = index => {
   return ({nativeEvent: {key: value}}) => {
     // auto focus to previous InputText if value is blank and existing value is also blank
     if (value === 'Backspace' && otpArray[index] === '') {
       if (index === 1) {
         firstTextInputRef.current.focus();
       } else if (index === 2) {
         secondTextInputRef.current.focus();
       } else if (index === 3) {
         thirdTextInputRef.current.focus();
       }
       else if (index === 4) {
         fourthTextInputRef.current.focus();
       }
       else if (index === 5) {
         fifthTextInputRef.current.focus();
       }
   

       /**
        * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
        * doing this thing for us
        * todo check this behaviour on ios
        */
       if ( index > 0) {
         const otpArrayCopy = otpArray.concat();
         otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
         setOtpArray(otpArrayCopy);
       }
     }
   };
 };

 otpArray.map((value) => {
    console.log(value)
 })
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
            {[
               firstTextInputRef,
               secondTextInputRef,
               thirdTextInputRef,
               fourthTextInputRef,
               fifthTextInputRef,
               sixthTextInputRef
            ].map((textInputRef, index)=> (
               <TextInput
               style={styles.InputForm}
               onChangeText={onOtpChange(index)}
               maxLength={1}
               autoFocus={index==0 ? true : undefined}
               keyboardType={'numeric'}
               key={index}
               ref={textInputRef}
               onKeyPress={onOtpKeyPress(index)}
               />
            ))}
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
      marginTop:heightPercentageToDP(4),
 
      },
      btnText: {
         color:"black",
         fontWeight:"bold",
         fontSize:heightPercentageToDP(2),
      
       },
      InputForm: {
         textAlign:'center',
         fontSize:heightPercentageToDP(3),
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
        
       
         marginTop:heightPercentageToDP(8),
         
      },
      bottomImage: {
         width:widthPercentageToDP(100),
         height:heightPercentageToDP(16), 
         resizeMode:'contain'
      }
})

export default Verification;
