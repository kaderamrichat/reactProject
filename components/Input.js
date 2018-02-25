import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry,keyboardType, returnKeyType,autoCapitalize }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
  },
  label: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 17,
    fontWeight: '700',
    width: '100%',
    marginTop:5,
    marginBottom:5,
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#333',
    fontSize: 15,
    width: '100%',
    height:50,
    borderColor: '#eee',
    borderWidth: 1,
  }
});

export { Input };