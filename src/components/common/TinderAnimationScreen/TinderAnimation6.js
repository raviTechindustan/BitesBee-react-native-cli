import React, { Component } from 'react'
import { View,Text,Image } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../../../Utilities/DeviceDimensions'
 
class TinderAnimation6 extends Component {

   render() {
      return(
        
         <View  style={{margin:10}}>
            <Card style={{height:heightPercentageToDP(78)}}>
               <Card.Title title="Sixth component"  />
               <Image source={{ uri:'https://source.unsplash.com/RfoISVdKM4U' }} style={{height:heightPercentageToDP(62)}} />
               <Card.Actions>
                  <Button>like</Button>
                  <Button>unlike</Button>
               </Card.Actions>
            </Card>
         </View>
      
      )
   }
  
}
export default TinderAnimation6