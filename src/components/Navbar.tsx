import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackerScreen from '../screens/core/TrackerScreen';
import SettingsScreen from '../screens/core/SettingsScreen';
import StatsScreen from '../screens/core/StatsScreen';
import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  focused: boolean;
}
//Could not figure out how to import images as .svg
//in assets/NavBarIcons I have the downloaded images as both .png and .svg in case u want to fix it
const TrackerTabOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    focused ?
      <Image source={require('../../assets/NavBarIcons/SelectedHome.png')} /> :
      <Image source={require('../../assets/NavBarIcons/HomeTab.png')} />
  )
}

const SettingsTabOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    focused ?
      <Image source={require('../../assets/NavBarIcons/SelectedProfile.png')} /> :
      <Image source={require('../../assets/NavBarIcons/ProfileIcon.png')} />
  )
}

const StatsTabOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    focused ?
      <Image source={require('../../assets/NavBarIcons/SelectedStats.png')} /> :
      <Image source={require('../../assets/NavBarIcons/StatsIcon.png')} />
  )
}

const navBarScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    backgroundColor: '#5BC0BE',
    height: 90
    
  }
}


export default function Navbar(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={navBarScreenOptions}>
      <Tab.Screen name="StatsScreen" component={StatsScreen} options={StatsTabOptions} />
      <Tab.Screen name="TrackerScreen" component={TrackerScreen} options={TrackerTabOptions} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={SettingsTabOptions} />
    </Tab.Navigator>
  )
}
