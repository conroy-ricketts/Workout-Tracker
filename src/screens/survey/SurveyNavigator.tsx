import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import OnboardingScreen from '../onboarding/OnboardingScreen'
import Question1 from './1Gender'
import Question2 from './2Age'
import Question3 from './3Weight'
import Question4 from './4Height'
import Question5 from './5Relationship'
import Question6 from './6FittnessGoal'
import Question7 from './7Challenges'
import Question8 from './8UniqueNeeds'
import Navbar from '../../components/Navbar'
const Stack = createStackNavigator()

export default function SurveyNavigator(): JSX.Element {
    const screenOptions = {
        ...TransitionPresets.SlideFromRightIOS,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="OnboardingScreen"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Question1" component={Question1} options={{ headerShown: false }}/>
                <Stack.Screen name="Question2" component={Question2} options={{ headerShown: false }}/>
                <Stack.Screen name="Question3" component={Question3} options={{ headerShown: false }}/>
                <Stack.Screen name="Question4" component={Question4} options={{ headerShown: false }}/>
                <Stack.Screen name="Question5" component={Question5} options={{ headerShown: false }}/>
                <Stack.Screen name="Question6" component={Question6} options={{ headerShown: false }}/>
                <Stack.Screen name="Question7" component={Question7} options={{ headerShown: false }}/>
                <Stack.Screen name="Question8" component={Question8} options={{ headerShown: false }}/>
                <Stack.Screen name="TrackerScreen" component={Navbar} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

