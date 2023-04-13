import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import StatsScreen from '../screens/core/StatsScreen'
import TrackerScreen from '../screens/core/TrackerScreen'
import WorkoutPlanScreen from '../screens/core/WorkoutPlanScreen'
import { AppColors } from '../resources/AppColors'

const { width, height } = Dimensions.get('window')
const Tab = createBottomTabNavigator()

type TabBarIconProps = {
    focused: boolean;
}

const TrackerTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/navbarIcons/SelectedHome.png')} style={styles.icon} /> :
            <Image source={require('../../assets/navbarIcons/Home.png')} style={styles.icon} />
    )
}

const WorkoutTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/navbarIcons/SelectedDumbbell.png')} style={styles.icon} /> :
            <Image source={require('../../assets/navbarIcons/Dumbbell.png')} style={styles.icon}/>
    )
}

const StatsTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/navbarIcons/SelectedStats.png')} style={styles.icon}/> :
            <Image source={require('../../assets/navbarIcons/Stats.png')} style={styles.icon}/>
    )
}

const navBarScreenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        backgroundColor: AppColors.SeaSerpent,
    }
}


export default function Navbar(): JSX.Element {
    return (
        <Tab.Navigator screenOptions={navBarScreenOptions}>
            <Tab.Screen name="WorkoutPlanScreen" component={WorkoutPlanScreen} options={WorkoutTabOptions} />
            <Tab.Screen name="TrackerScreen" component={TrackerScreen} options={TrackerTabOptions} />
            <Tab.Screen name="StatsScreen" component={StatsScreen} options={StatsTabOptions} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: height < 900 ? (48 *.85):48,
        width: width < 420 ? (48 * .85):48
    }
})