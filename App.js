import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './ReduxStore/store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Components/SplashScreen/splashScreen';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SplashScreen />
      </Provider>
    );
  }
}

