import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Navbar from './Components/Navbar'

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Navbar />
            <StatusBar style="light" />
        </NavigationContainer>
        
    )
}

registerRootComponent(App)