import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TrackerScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Home Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
