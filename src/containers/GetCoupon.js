import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity } from 'react-native'
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../Utilities/DeviceDimensions'

function GetCoupon({navigation}) {
   return(
    <View style={styles.contianer}>
          <View style={styles.foodImageView}>
            <Image
            style={{width:widthPercentageToDP(70),height:heightPercentageToDP(20),}}
            source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/mainscreenimage.png')}
            />
          </View>
          <View style={styles.beesLogoView}>
            <Image
               style={{width:widthPercentageToDP(36), height:heightPercentageToDP(18), borderRadius:10}}
               source={require('/home/sameer/development/test3/BitesBee/assets/images/Slicing/3x/mainscreenlogo.png')}
               />
          </View>
          <View style={styles.delightedStaticTextView}>
            <Text style={styles.statictext}>We are so delighted</Text>
            <Text style={styles.statictext}>that you are here</Text>
          </View>
          <View style={styles.thanksTextView}>
            <Text style={styles.thanksText}>Thanks for installing this app </Text>
            <Text style={styles.thanksText}>and for gettig coupon</Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FoodCoupon')}
            >
            <Text style={styles.btnText} >Get a coupon code</Text>
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
  },
  beesLogoView: {
    flexDirection:'row',
    justifyContent:'center'
  },
  delightedStaticTextView: {
    alignItems:'center',
    marginTop:heightPercentageToDP(3.5)
  },
  statictext: {
    fontSize:heightPercentageToDP(3.5),
    fontWeight:'bold'
  },
  thanksTextView: {
    flex:1,
    alignItems:'center',
    marginTop:heightPercentageToDP(4)
  },
  thanksText: {
    marginLeft:widthPercentageToDP(10),
    marginRight:widthPercentageToDP(10),
    color:"grey",
    fontWeight:'bold'
  },
  buttonView: {
    marginLeft:widthPercentageToDP(10),
    marginRight:widthPercentageToDP(10),
    marginTop:heightPercentageToDP(3.5)
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffc107',
    justifyContent:"center",
    borderRadius:50,
    height:heightPercentageToDP(6),
    marginTop:heightPercentageToDP(3.5)
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
export default GetCoupon
