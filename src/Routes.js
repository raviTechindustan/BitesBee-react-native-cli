import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './containers/Login'
import Verification from './containers/Verification'
import GetCoupon from './containers/GetCoupon'
import FoodCoupon from './containers/FoodCoupon'
import WelcomeBitesBee from './containers/WelcomeBitesBee'
import Tinder from './containers/Tinder'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Verification" component={Verification} options={{
          title: '',
          headerStyle: {
          elevation:0
          },
        }} />
        <Stack.Screen name="GetCoupon" component={GetCoupon} options={{headerShown:false}} />
        <Stack.Screen name="FoodCoupon" component={FoodCoupon} options={{
          title: 'Food Coupons',
          headerStyle: {
          elevation:0
          },
        }}  />
        <Stack.Screen name="WelcomeBitesBee" component={WelcomeBitesBee} options={{headerShown:false}} />
        <Stack.Screen name="Tinder" component={Tinder} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;