import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressChart from '../../components/ProgressChart'
import { AppColors } from '../../resources/AppColors'
import { SafeAreaView } from 'react-native-safe-area-context'
import FullWidthRectButton from '../../components/FullWidthRectButton'

export default function TrackerScreen(): JSX.Element {
    const [progressChartType, setPogressChartType] = useState<'compact' | 'normal'>('compact')

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: AppColors.MaastrichtBlue, justifyContent: 'space-between'}}>
            <View>
                <Text style={{textAlign: 'center', fontStyle: 'normal', fontWeight: '400', fontSize: 48, color: AppColors.White, paddingBottom: 40}}>
                    {'Fit 4 U'}
                </Text>
                <ProgressChart chartType={progressChartType} />
            </View>
            <View style={{paddingBottom: 40}}>
                {/* TODO: We need to replace these buttons with Tran's button when she finishes that. */}
                <View style={{paddingTop: 30, alignSelf: 'center', }}>
                    <FullWidthRectButton 
                        text='Complete a Workout'
                        onPress={() => {}} 
                    />
                </View>
                <View style={{paddingTop: 30, alignSelf: 'center', }}>
                    <FullWidthRectButton 
                        text='Retake The Survey' 
                        onPress={() => {}}
                    />
                </View>
                <View style={{paddingTop: 30, alignSelf: 'center', }}>
                    <FullWidthRectButton 
                        text='Toggle Chart Type' 
                        onPress={() => setPogressChartType(progressChartType == 'compact' ? 'normal' : 'compact')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})
