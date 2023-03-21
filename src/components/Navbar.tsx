import React from 'react';
import { Image,StyleSheet,Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackerScreen from '../screens/core/TrackerScreen';
import SettingsScreen from '../screens/core/SettingsScreen';
import StatsScreen from '../screens/core/StatsScreen';
import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';

const {width,height} = Dimensions.get('window')
const Tab = createBottomTabNavigator();

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

const SettingsTabOptions = {
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
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={SettingsTabOptions} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  icon:{
    height: height < 900 ? (48 *.85):48,
    width: width < 420 ? (48 * .85):48
  }
})