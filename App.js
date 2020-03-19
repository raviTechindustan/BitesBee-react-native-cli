
import React, { useEffect, Component } from 'react';
import { View, Dimensions } from 'react-native';

import Routes from './src/Routes';







function App() {
  // useEffect(()=> {
  //   Dimensions.addEventListener('change',() => {
  //     forceUpdate();
  //   })
  // })
  
  return (
    <View style={{ flex: 1 }}>
      
          <Routes />
        
    </View>
  );
  
}
   



export default App;
