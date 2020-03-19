import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity,Span } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../../../Utilities/DeviceDimensions'

function TinderAnimation1({navigation}) {
   return(
       <View style={{backgroundColor:'white',flex:1}}>
          <View style={{alignItems:'center',marginTop:heightPercentageToDP(0),position:"relative"}}>
            <Image
               style={{width:widthPercentageToDP(100),height:heightPercentageToDP(80),resizeMode:'contain'}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/couponbg.png')}
            />
          </View>
          <View style={{position:'absolute',top:heightPercentageToDP(10),left:widthPercentageToDP(10)}}>
            <Image
               style={{width:widthPercentageToDP(20),height:heightPercentageToDP(7),resizeMode: 'contain',marginLeft:widthPercentageToDP(10)}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/dottedshape.png')}
            />
          </View>
          <View style={{alignItems:'center',position:'absolute',top:heightPercentageToDP(5),left:widthPercentageToDP(28)}}>
            <Image
            style={{width:widthPercentageToDP(50),height:heightPercentageToDP(25),resizeMode: 'contain'}}
            source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/couponfoodimage.png')}
            />
          </View>
         
         <View style={{flexDirection:'row',position:'absolute',top:heightPercentageToDP(30),width:widthPercentageToDP(100),justifyContent:'center'}}>
            <Text style={{fontSize:heightPercentageToDP(3),fontWeight:'bold'}}>UPTO</Text>
            <Text style={{fontSize:heightPercentageToDP(3),fontWeight:'bold',color:'green'}}> 20% OFF</Text>
         </View>
         <Text style={{textAlign: 'center',width:'100%',position:'absolute',top:heightPercentageToDP(35),fontSize:heightPercentageToDP(3)}}>on your first meal</Text>
         <Text style={{textAlign: 'center',width:'100%',position:'absolute',top:heightPercentageToDP(44),fontSize:heightPercentageToDP(2.5),color:'white'}}>COUPON CODE</Text>
         <View style={{width:widthPercentageToDP(100),alignItems:'center',textAlign:'center',position:'absolute',top:heightPercentageToDP(51)}}  >
            <TouchableOpacity>
               <View style={{width:widthPercentageToDP(50),height:heightPercentageToDP(8),borderColor:'white',borderWidth:1,borderStyle: 'dashed',borderRadius: 1,justifyContent:'center'}}>  
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{color:'white',fontSize:heightPercentageToDP(2.5),fontWeight:'bold'}}>FIRST MEAL 20</Text>
                  </View>
               </View>
            </TouchableOpacity>
         </View>
         <View style={styles.buttonView}>
            <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate('WelcomeBitesBee')}
            >
            <Text style={styles.btnText} >Redeem now</Text>
            </TouchableOpacity>
          </View>
          <Text style={{position:'absolute',top:heightPercentageToDP(73),textAlign:'center',width:'100%',color:'#ffffff9c',fontSize:heightPercentageToDP(2)}}>Valid till 20 March 2019</Text>
       </View>
   )
}


const styles = StyleSheet.create({
   buttonView: {
      position:'absolute',
      top:heightPercentageToDP(60),
      width:widthPercentageToDP(100),
      alignItems:'center'
   },
   button: {
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent:"center",
      borderRadius:50,
      height:heightPercentageToDP(6),
      width:widthPercentageToDP(50),
      marginTop:heightPercentageToDP(4),
      
      },
      btnText: {
         color:"black",
         fontWeight:"bold",
         fontSize:heightPercentageToDP(2.2)
       },
})
export default TinderAnimation1
