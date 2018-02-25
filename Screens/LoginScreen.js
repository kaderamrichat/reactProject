import React from 'react';
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import * as firebase from 'firebase';

import { Button } from '../components/Button';
import { Input } from '../components/Input';


export default class LoginScreen extends React.Component {

componentWillMount(){
  const firebaseConfig = {
    apiKey:'AIzaSyBn7yxxo5UNOzI6OaVsoSE8pwZzsTpgBoA',
    authDomain:'finder-ce991.firebaseapp.com'
  }
  firebase.initializeApp(firebaseConfig);
}

onLogin = () => {
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((loggedInUser) => {
    Alert.alert('Connexion Firebase',`Vous être connecté avec ${JSON.stringify(loggedInUser.toJSON().email)}`);


    console.log(`login with user :${JSON.stringify(loggedInUser.toJSON().email)}`);
  }).catch((error)=>{
    Alert.alert('Erreur','Email / Password erroné !');
  })
}

state = {
  email: '',
  password: '',
  authenticating: false,
  user: null,
  error: '',
}

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.title}>Finder</Text>
          <Image 
            source={require('../assets/img/user.png')} 
          />
          <Input
            placeholder='Entrer votre email...'
            returnKeyType="next"
            label='Email :'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Entrer votre mot de passe...'
            secureTextEntry
            returnKeyType="go"
            label='Mot de passe :'
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button onPress={this.onLogin}>Se connecter</Button>
      </KeyboardAvoidingView>
   
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
