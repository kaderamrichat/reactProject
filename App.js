import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';

// import {stackNavigator} from 'react-navigator';

import LoginScreen from './Screens/LoginScreen';
import Geoc from './Screens/Geoc';


export default class App extends React.Component {

  render() {
    return ( <LoginScreen / >
    );
  }
}

// const AppNavigator = stackNavigator({
//   loginScreen: {
//     screen: LoginScreen
//   },
//   Geoc: {
//     screen: Geoc
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 60,
    color: '#3498DB',
  }
});