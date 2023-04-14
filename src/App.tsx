import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Navbar from './components/Navbar'
import SurveyNavigator from './screens/survey/SurveyNavigator'

export default function App(): JSX.Element {
    
    return (
        <SurveyNavigator/>
    )
}

registerRootComponent(App)