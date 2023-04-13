<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import { View } from 'react-native'
import { fetchExercises, fetchMuscles} from '../backend/WorkoutAPI/exercises'


export default function App(): JSX.Element {
    useEffect(() => {
        
        //How to call the fetchExercises
        //fetchExercises().then(result => console.log(result));
    
      }, []); 
  
    return (
          <NavigationContainer>
              <Navbar />
              <StatusBar style="auto" />
          </NavigationContainer>
    
  )
}



=======
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
            <Navbar />
            <StatusBar style="light" />
        </NavigationContainer>
        
        // For survey screens:
        // <SurveyNavigator/>
    )
}

>>>>>>> 07c373fc922698b6115e0d397217ef16898ce3ad
registerRootComponent(App)