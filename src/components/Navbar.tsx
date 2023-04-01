import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import WorkoutPlanScreen from '../screens/core/WorkoutPlanScreen'
import StatsScreen from '../screens/core/StatsScreen'
import TrackerScreen from '../screens/core/TrackerScreen'

const {width,height} = Dimensions.get('window')
const Tab = createBottomTabNavigator()

type TabBarIconProps = {
  focused: boolean;
}

// TODO: These images need to be SVGs.
const TrackerTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/NavBarIcons/SelectedHome.png')} style={styles.icon} /> :
            <Image source={require('../../assets/NavBarIcons/HomeTab.png')} style={styles.icon} />
    )
}

const WorkoutTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/NavBarIcons/SelectedProfile.png')} style={styles.icon} /> :
            <Image source={require('../../assets/NavBarIcons/ProfileIcon1.png')} style={styles.icon}/>
    )
}

const StatsTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/NavBarIcons/SelectedStats1.png')} style={styles.icon}/> :
            <Image source={require('../../assets/NavBarIcons/StatsIcon.png')} style={styles.icon}/>
    )
}

const navBarScreenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        backgroundColor: '#5BC0BE',
    }
}


export default function Navbar(): JSX.Element {
    return (
        <Tab.Navigator screenOptions={navBarScreenOptions}>
            <Tab.Screen name="StatsScreen" component={StatsScreen} options={StatsTabOptions} />
            <Tab.Screen name="TrackerScreen" component={TrackerScreen} options={TrackerTabOptions} />
            <Tab.Screen name="WorkoutPlanScreen" component={WorkoutPlanScreen} options={WorkoutTabOptions} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon:{
        height: height < 900 ? (48 *.85):48,
        width: width < 420 ? (48 * .85):48
    }
})