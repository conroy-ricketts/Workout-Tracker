import { registerRootComponent } from 'expo'
import React from 'react'
import SurveyNavigator from './screens/survey/SurveyNavigator'

export default function App(): JSX.Element {
    
    return (
        <SurveyNavigator/>
    )
}

registerRootComponent(App)