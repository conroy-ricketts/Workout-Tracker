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



registerRootComponent(App)