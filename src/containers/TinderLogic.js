import React, { Component } from 'react'
import { View,Text, PanResponder ,Animated,Dimensions,StyleSheet,LayoutAnimation,UIManager} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_LIMIT = SCREEN_WIDTH / 2;
class TinderLogic extends Component{
   constructor(props){
      super(props);
      this.state={
         index:0,
      }
      const position = new Animated.ValueXY();
         this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove:(e,gesture)=>{
              position.setValue({x:gesture.dx,y:gesture.dy})   
            },
            onPanResponderRelease:(e,gesture)=> {
               if(gesture.dx > SWIPE_LIMIT){
                  this.swiped("right")
               }
               else if(gesture.dx < -SWIPE_LIMIT) {
                  this.swiped("left")
               }
               else {
                  this.resetPositon()
               } 
            }
         })
         this.position = position
      }
      componentDidUpdate() {
         UIManager.setLayoutAnimationEnabledExperimental
         &&
         UIManager.setLayoutAnimationEnabledExperimental(true);
         LayoutAnimation.spring();
      }
   swiped(direction){
      const x = direction ==='right' ? SCREEN_WIDTH * 3 : -SCREEN_WIDTH * 3
      Animated.timing(this.position,{
         toValue:{x:x,y:0}
      }).start(()=>{
         this.position.setValue({x:0,y:0}),
         this.setState({index:this.state.index+1})
      })
   }
   resetPositon(){
      Animated.spring(this.position,{
         toValue:{ x:0,y:0},
         stiffness:200
      }).start()
   }
   mycardStyle(){
      const rotate = this.position.x.interpolate({
         inputRange:[-SCREEN_WIDTH*2,0,SCREEN_WIDTH *2],
         outputRange:['-0deg','0deg','0deg']
      })
      return {
         ...this.position.getLayout(),
         transform:[{rotate:rotate}]
      }
   }
   
   rendercards() {
      if(this.state.index >= this.props.data.length) {
         return this.props.renderNoMoreCards()
      }
      return this.props.data.map((item,i)=>{
         if(i<this.state.index){
            return null
         }
         if(i===this.state.index){
            return(
            <Animated.View
               key={item.id}
               style={[this.mycardStyle(),styles.cardStyle]}
               {...this.panResponder.panHandlers}
            >
               {this.props.renderCards(item)}
            </Animated.View>
            )
         }
         return (
            <Animated.View key={item.id}style={[styles.cardStyle,{left:10*(i-this.state.index),top:10*(i-this.state.index)}]}>
               {  this.props.renderCards(item)}
            </Animated.View>
         )
        
      }).reverse()
   }
   render() {
      return(
        <View>
           {this.rendercards()}
        </View>
      )
   }
}
const styles = StyleSheet.create({
   cardStyle:{
      position:'absolute',
      zIndex:1,
      width:SCREEN_WIDTH-30
   }
})

export default TinderLogic