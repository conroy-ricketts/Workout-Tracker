import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppColors } from '../resources/AppColors'

type RectButtonProps ={
  text: string
}

export default function FullWidthRectButton(props: RectButtonProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

// TODO: For a responsive width (on the TouchableOpacity style), import Dimensions from react-native, and use Dimensions.get('window').width * 0.8.
const styles = StyleSheet.create({
    TouchableOpacity:{
        backgroundColor: AppColors.SeaSerpent,
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        width: 358,
        height: 64,
    },

    text:{
        color: AppColors.MaastrichtBlue,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})