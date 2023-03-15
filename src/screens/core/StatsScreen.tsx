import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function TrackerScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Stats Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});