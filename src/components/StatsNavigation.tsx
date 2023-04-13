import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import PictureAlbum from '../screens/core/PictureAlbum'
import StatsScreen from '../screens/core/StatsScreen'
const Stack = createStackNavigator()

export default function StatsNavigator(): JSX.Element {
    const screenOptions = {
        ...TransitionPresets.FadeFromBottomAndroid,
    }

    return (
        <Stack.Navigator
            initialRouteName="PictureAlbum"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="PictureAlbum" component={PictureAlbum} options={{ headerShown: false }} />
            <Stack.Screen name="StatsScreen" component={StatsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}


