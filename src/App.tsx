import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import Question6 from './screens/survey/6FittnessGoal'
import Question1 from './screens/survey/1Gender'
import Question5 from './screens/survey/5Relationship'
import Question7 from './screens/survey/7Challenges'
import Question8 from './screens/survey/8UniqueNeeds'


export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
   <Question8 />
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