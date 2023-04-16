import { StackNavigationProp } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { SafeAreaView } from 'react-native-safe-area-context'
import FullWidthRoundButton from '../../components/FullWidthRoundButton'
import ProgressChart from '../../components/ProgressChart'
import { storeWorkout } from '../../helpers/ProgressChartDataHelper'
import { AppColors } from '../../resources/AppColors'
import { LogBox } from 'react-native';

type TrackerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TrackerScreen'>;
type Question1ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Question1'>;
type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TrackerScreen'>;

type RootStackParamList = {
    TrackerScreen: undefined;
    Question1: undefined;
};
type TrackerScreenProps = {
    navigation: TrackerScreenNavigationProp;
};
type Question1Props = {
    navigation: Question1ScreenNavigationProp;
};

export default function TrackerScreen({ navigation }: { navigation: ScreenNavigationProp }): JSX.Element {
    const [progressChartType, setPogressChartType] = useState<'compact' | 'normal'>('compact')
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

    useFonts({'Michroma-Regular': require('../../../assets/fonts/Michroma-Regular.ttf')})
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications

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
                        onPress={() => setIsDatePickerOpen(true)} 
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
            <DateTimePickerModal
                isVisible={isDatePickerOpen}
                mode="date"
                onConfirm={(date) => {
                    storeWorkout(date)
                    setIsDatePickerOpen(false)
                }}
                onCancel={() => setIsDatePickerOpen(false)}
            />
        </SafeAreaView>
    )
}

const reusedStyles = StyleSheet.create({
    buttonView: {
        paddingTop: 30, 
        alignSelf: 'center'
    }
})