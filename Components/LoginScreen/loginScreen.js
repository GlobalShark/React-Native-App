import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';


class SplashScreen extends Component {
  constructor(props){
    super(props)
    this.signup = this.signup.bind(this)
  }

  // Signup 
  signup(){
    // Configures the SDK with some options
    RNAccountKit.configure({
      responseType: 'code',
      titleType: 'login',
      initialPhoneCountryPrefix: '+92', 
      defaultCountry: 'PK',
      receiveSMS: true,
      readPhoneStateEnabled: true
    })

    RNAccountKit.loginWithPhone()
  .then((token) => {
    if (!token) {
      console.log('Login cancelled')
    } else {
      console.log(`Logged with phone. Token: ${JSON.stringify(token)}`)
    }
  })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Signup</Text>
        <Button onPress={this.signup} title="Signup via Phone" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});

export default SplashScreen;