import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { registerRootComponent } from 'expo'
import FullWidthRectButton from './Components/FullWidthRectButton'

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

registerRootComponent(App)