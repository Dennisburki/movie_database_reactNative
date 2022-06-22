import { View, Text } from 'react-native'
import * as React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import StackNav from './src/navigation/StackNav'
import { Provider } from 'react-redux'
import {store} from './src/store'



const App = () => {
  return (
    <Provider store = {store}>
    <View style={{flex:1}}>
      <StackNav/>
    </View>
    </Provider>
  )
}

export default App