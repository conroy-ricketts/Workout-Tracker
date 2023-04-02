import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppColors } from '../resources/AppColors'

type ButtonProps = {
  title: string,
  onPress: () => void
}

export default function SmallWidthRoundedButton(props: ButtonProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.SeaSerpent,
        padding: 15,
        borderRadius: 48,
        alignItems: 'center',
        height: 50,
        width: 120
    },
    buttonText: {
        color: AppColors.MaastrichtBlue,
        fontSize: 17,
        fontWeight: 'bold'
    },
})