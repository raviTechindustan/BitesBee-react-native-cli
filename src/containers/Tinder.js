import React, { Component } from 'react'
import { View,Text,Image } from 'react-native'
import TinderLogic from './TinderLogic.js'
import TinderAnimation1 from '../components/common/TinderAnimationScreen/TinderAnimation1'
import TinderAnimation2 from '../components/common/TinderAnimationScreen/TinderAnimation2'
import TinderAnimation3 from '../components/common/TinderAnimationScreen/TinderAnimation3'
import TinderAnimation4 from '../components/common/TinderAnimationScreen/TinderAnimation4'
import TinderAnimation5 from '../components/common/TinderAnimationScreen/TinderAnimation5'
import TinderAnimation6 from '../components/common/TinderAnimationScreen/TinderAnimation6'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { heightPercentageToDP } from '../../Utilities/DeviceDimensions.js'

let TinderAnimationcomponent1 = <TinderAnimation1 />
let TinderAnimationcomponent2 = <TinderAnimation2 />
let TinderAnimationcomponent3 = <TinderAnimation3 />
let TinderAnimationcomponent4 = <TinderAnimation4 />
let TinderAnimationcomponent5 = <TinderAnimation5 />
let TinderAnimationcomponent6 = <TinderAnimation6 />

const mydata = [
      { id: 1, text: 'card 1', uri:  TinderAnimationcomponent1 },
      { id: 2, text: 'card 2', uri: TinderAnimationcomponent2 },
      { id: 3, text: 'card 3', uri: TinderAnimationcomponent3 },
      { id: 4, text: 'card 4', uri: TinderAnimationcomponent4 },
      { id: 5, text: 'card 5', uri: TinderAnimationcomponent5 },
      { id: 6, text: 'card 6', uri: TinderAnimationcomponent6 },
    ];
 
class Tinder extends Component {
   renderCard(item) {
      return(
      <View>
        {item.uri}
      </View>
      )
   } 

   renderNoMoreCards() {
      return(
         <View  style={{margin:10,alignItems:'center',justifyContent:'center',height:heightPercentageToDP(100)}}>
          <Text style={{fontSize:heightPercentageToDP(3)}}>YOU Did Not Seleted Anyone</Text>
          
         </View>
      )      
   }

   render() {
      return(
         <View>
            <TinderLogic 
            data={mydata}
            renderCards={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            />
           
         </View>
      )
   } 
}
export default Tinder