import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/MainNavigation/Navigation'
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import Loading from './src/common/customComponent/Loader';


const App = () => {

  return (
    <Provider store={store}>
      <Navigation />
      <Loading />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})