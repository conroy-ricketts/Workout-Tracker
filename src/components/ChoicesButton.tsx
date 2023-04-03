import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
  title: string,
  onPress: () => void,
  isSelected?: boolean,
  
}

export default function Choices (props: ButtonProps): JSX.Element {
    return (
        <TouchableOpacity style={[styles.button, props.isSelected && styles.buttonSelected]} onPress={props.onPress}>
            <Text style={[styles.buttonText, props.isSelected && styles.buttonTextSelected]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3A506B',
        padding: 15,
        borderRadius: 48,
        alignItems: 'center',
        marginVertical: 10,
        height: 57,
        width: 318,
    },
    buttonSelected: {
        backgroundColor: '#5BC0BE',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
        height: 40,
        textAlign: 'center'
    },
    buttonTextSelected: {
        color: '#000000',
    },
});
