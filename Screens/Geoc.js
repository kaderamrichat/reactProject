import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Page Maps
            </Text>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    padding:20
  },
  title:{
    fontWeight:'bold',
    fontSize:50,
    marginBottom:60,
    color:'#3498DB',
  }
});
