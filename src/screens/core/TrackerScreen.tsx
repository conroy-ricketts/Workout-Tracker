import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FullWidthRoundButton from '../../components/FullWidthRoundButton'
import ProgressChart from '../../components/ProgressChart'
import { AppColors } from '../../resources/AppColors'
import { StackNavigationProp } from '@react-navigation/stack'
type RootStackParamList = {
    TrackerScreen: undefined;
    Question1: undefined;
  };
  type TrackerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TrackerScreen'
>;
  type Question1ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Question1'
>;
type TrackerScreenProps = {
    navigation: TrackerScreenNavigationProp;
  };
  type Question1Props = {
    navigation: Question1ScreenNavigationProp;
  };
type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TrackerScreen'>;

export default function TrackerScreen({ navigation }: { navigation: ScreenNavigationProp }) {
    const [progressChartType, setPogressChartType] = useState<'compact' | 'normal'>('compact')
    useFonts({'Michroma-Regular': require('../../../assets/fonts/Michroma-Regular.ttf')})

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: AppColors.MaastrichtBlue, justifyContent: 'space-between'}}>
            <View>
                <Text style={{textAlign: 'center', fontStyle: 'normal', fontFamily: 'Michroma-Regular', fontWeight: '400', fontSize: 48, color: AppColors.White, paddingBottom: 40}}>
                    {'Fit 4 U'}
                </Text>
                <ProgressChart chartType={progressChartType} />
            </View>
            <View style={{paddingBottom: 70}}>
                <View style={reusedStyles.buttonView}>
                    <FullWidthRoundButton 
                        text='Complete a Workout'
                        backgroundColor={AppColors.SeaSerpent}
                        textColor={AppColors.MaastrichtBlue}
                        onPress={() => {}} 
                    />
                </View>
                <View style={reusedStyles.buttonView}>
                    <FullWidthRoundButton 
                        text='Retake The Survey' 
                        backgroundColor={AppColors.White}
                        textColor={AppColors.MaastrichtBlue}
                        onPress={() => navigation.navigate('Question1')}
                    />
                </View>
                <View style={reusedStyles.buttonView}>
                    <FullWidthRoundButton 
                        text='Toggle Chart Type' 
                        backgroundColor={AppColors.SeaSerpent}
                        textColor={AppColors.MaastrichtBlue}
                        onPress={() => setPogressChartType(progressChartType == 'compact' ? 'normal' : 'compact')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const reusedStyles = StyleSheet.create({
    buttonView: {
        paddingTop: 30, 
        alignSelf: 'center'
    }
})