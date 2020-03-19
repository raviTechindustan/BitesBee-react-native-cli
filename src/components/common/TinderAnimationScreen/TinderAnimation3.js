import React, { Component } from 'react'
import { View,Text,Image } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
   widthPercentageToDP,
   heightPercentageToDP
 } from '../../../../Utilities/DeviceDimensions'
 
class TinderAnimation3 extends Component {

   render() {
      return(
        
         <View  style={{margin:10}}>
            <Card style={{height:heightPercentageToDP(78)}}>
               <Card.Title title="Third component"  />
               <Image source={{ uri:'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' }} style={{height:heightPercentageToDP(62)}} />
               <Card.Actions>
                  <Button>like</Button>
                  <Button>unlike</Button>
               </Card.Actions>
            </Card>
         </View>
      
      )
   }
  
}
export default TinderAnimation3