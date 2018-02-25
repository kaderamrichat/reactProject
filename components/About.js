import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default class About extends React.Component{

    render (){
        return (  
            <View style={styleAbout.contain}>
                <Text style={styleAbout.title}>Finder</Text>
                <Text style={styleAbout.paragraph}>Une application créée dans le but d'être revendue 5 millions </Text>
            </View>
        )
    }
}

const styleAbout = StyleSheet.create({
    contain:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize:50,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:20,
        borderWidth:2,
        borderColor:'white',
        justifyContent: 'center',
    },
    paragraph:{
        textAlign:'center',
        padding:20,
        color:'white',
        
    }

});