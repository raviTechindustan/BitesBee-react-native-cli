import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity,Span } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../Utilities/DeviceDimensions'

function FoodCoupon({navigation}) {
   return(
       <View style={{backgroundColor:'white',flex:1}}>
          <View style={{alignItems:'center',marginTop:40,position:"relative",width:'100%'}}>
            <Image
               style={{width:widthPercentageToDP(100),height:heightPercentageToDP(80),}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/couponbg.png')}
            />
          </View>
          <View style={{position:'absolute',top:100,left:60}}>
            <Image
               style={{width:widthPercentageToDP(30),height:heightPercentageToDP(9),}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/dottedshape.png')}
            />
          </View>
          <View style={{alignItems:'center',position:'absolute',top:50,left:100}}>
            <Image
            style={{width:widthPercentageToDP(50),height:heightPercentageToDP(25),}}
            source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/couponfoodimage.png')}
            />
          </View>
         
         <View style={{flexDirection:'row',alignItems:"center",position:'absolute',top:230,left:100,width:'100%'}}>
            <Text style={{fontSize:26,fontWeight:'bold'}}>UPTO</Text>
            <Text style={{fontSize:26,fontWeight:'bold',color:'green'}}> 20% OFF</Text>
         </View>
         <Text style={{textAlign: 'center',width:'100%',position:'absolute',top:260,fontSize:20}}>on your first meal</Text>
         <Text style={{textAlign: 'center',width:'100%',position:'absolute',top:355,fontSize:20,color:'white'}}>COUPON CODE</Text>
         <View style={{width:'100%',alignItems:'center',textAlign:'center',position:'absolute',top:400}}  >
            <TouchableOpacity onPress={() => navigation.navigate('WelcomeBitesBee')}>
               <View style={{width:widthPercentageToDP(70),height:heightPercentageToDP(10),borderColor:'white',borderWidth:1,borderStyle: 'dashed',borderRadius: 1,justifyContent:'center'}}>  
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>FIRST MEAL 20</Text>
                  </View>
               </View>
            </TouchableOpacity>
         </View>
         <View style={styles.buttonView}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WelcomeBitesBee')}
            >
            <Text style={styles.btnText} >Redeem now</Text>
            </TouchableOpacity>
          </View>
          <Text style={{position:'absolute',top:565,textAlign:'center',width:'100%',color:'#ffffff9c'}}>Valid till 20 March 2019</Text>
       </View>
   )
}


const styles = StyleSheet.create({
   buttonView: {
      position:'absolute',
      top:480,
      marginRight:widthPercentageToDP(15),
      width:'100%',
      alignItems:'center'
   },
   button: {
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent:"center",
      borderRadius:50,
      height:heightPercentageToDP(6),
      width:widthPercentageToDP(60),
      marginTop:heightPercentageToDP(4),
      
      },
      btnText: {
         color:"black",
         fontWeight:"bold",
         fontSize:15
       },
})
export default FoodCoupon
