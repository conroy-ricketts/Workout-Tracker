import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type RoundButtonProps = {
    text: string,
    backgroundColor: string,
    textColor: string,
    onPress: () => void
}

export default function RoundButton(props: RoundButtonProps): JSX.Element {
    return (
        <TouchableOpacity style={[styles.touchableOpacity, {backgroundColor: props.backgroundColor}]} onPress={props.onPress}>
            <Text style={[styles.text, {color: props.textColor}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
        padding: 15,
        borderRadius: 48, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 287, 
        height: 50,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
