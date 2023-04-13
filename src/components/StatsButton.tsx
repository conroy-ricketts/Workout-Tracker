import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

type ButtonProps = {
  onPress: () => void
}

export default function SwitchScreensButton(props: ButtonProps): JSX.Element {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image source={require('../../assets/StatsScreenButton.png')} style={styles.button}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 50,
    },
})