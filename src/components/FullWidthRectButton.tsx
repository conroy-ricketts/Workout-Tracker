import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
type RectButtonProps = {
    text: string,
    backgroundColor: string,
    onPress: () => void
}

export default function FullWidthRectButton(props: RectButtonProps): JSX.Element {
    return (
        <TouchableOpacity style={[styles.TouchableOpacity, {backgroundColor: props.backgroundColor}]} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

// TODO: For a responsive width (on the TouchableOpacity style), import Dimensions from react-native, and use Dimensions.get('window').width * 0.8.
const styles = StyleSheet.create({
    TouchableOpacity: {
        borderRadius: 5,
        justifyContent: 'center',
        width: 358,
        height: 64,
    },
    text: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0B132B',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    }
})