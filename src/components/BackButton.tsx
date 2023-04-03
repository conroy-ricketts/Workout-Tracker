import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


type ButtonProps = {
  onPress: () => void
}

export default function BackButton(props: ButtonProps): JSX.Element {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.text}> {'<'} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center'
    }
})
