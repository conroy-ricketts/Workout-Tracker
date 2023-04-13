import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import TrackerScreen from '../screens/core/TrackerScreen'
import WorkoutPlanScreen from '../screens/core/WorkoutPlanScreen'
import { AppColors } from '../resources/AppColors'
import StatsNavigator from './StatsNavigation'


const { width, height } = Dimensions.get('window')
const Tab = createBottomTabNavigator()

type TabBarIconProps = {
    focused: boolean;
}

const TrackerTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/NavBarIcons/SelectedHome.png')} style={styles.icon} /> :
            <Image source={require('../../assets/NavBarIcons/Home.png')} style={styles.icon} />
    )
}

const WorkoutTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/NavBarIcons/SelectedDumbbell.png')} style={styles.icon} /> :
            <Image source={require('../../assets/NavBarIcons/Dumbbell.png')} style={styles.icon}/>
    )
}

const StatsTabOptions = {
    tabBarIcon: ({ focused }: TabBarIconProps) => (
        focused ?
            <Image source={require('../../assets/NavBarIcons/SelectedStats.png')} style={styles.icon}/> :
            <Image source={require('../../assets/NavBarIcons/Stats.png')} style={styles.icon}/>
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
export type NavbarProps = {
    statsNavigator: JSX.Element;
  };

const Navbar = ({ statsNavigator }: NavbarProps) => {
    return (
        <Tab.Navigator screenOptions={navBarScreenOptions}>
            <Tab.Screen name="Pic/StatsScreen" component={StatsNavigator} options={StatsTabOptions} />
            <Tab.Screen name="TrackerScreen" component={TrackerScreen} options={TrackerTabOptions} />
            <Tab.Screen name="WorkoutPlanScreen" component={WorkoutPlanScreen} options={WorkoutTabOptions} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: height < 900 ? (48 *.85):48,
        width: width < 420 ? (48 * .85):48
    }
})
export default Navbar