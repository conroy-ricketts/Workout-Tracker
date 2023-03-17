import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import OnboardingScreen from './screens/onboarding/OnboardingScreen'

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <OnboardingScreen />
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