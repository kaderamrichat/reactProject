import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';


const Button = (props) => {
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonBody}
        >
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBody:{
        backgroundColor:'#3498DB',
        width:'100%',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginVertical:20,
        height:50,
    },
    buttonText:{
        fontSize:19,
        fontWeight:'700',
        color:'#FFF',
    }
});

export {Button}