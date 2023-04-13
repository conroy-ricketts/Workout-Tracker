import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Navbar from './components/Navbar'
import StatsNavigator from './components/StatsNavigation'

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            {/* I made a Navigator implemented into NavBar for the stats screen so user can switch from progress photos to stats screen */}
            <Navbar statsNavigator={<StatsNavigator />}/>
            <StatusBar style="light" />
        </NavigationContainer>
    )
}

registerRootComponent(App)