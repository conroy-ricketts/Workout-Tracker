import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FullWidthRectButton from '../../components/FullWidthRectButton'
import ProgressChart from '../../components/ProgressChart'
import { AppColors } from '../../resources/AppColors'

const {width,height} = Dimensions.get('window')

export default function TrackerScreen(): JSX.Element {
    const [progressChartType, setPogressChartType] = useState<'compact' | 'normal'>('compact')

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: AppColors.MaastrichtBlue, justifyContent: 'space-between'}}>
            {/* To keep the logo look consistent I imported the logo image as the font style is not available on react native */}
            <View style={reusedStyles.appTitleContainer}>
                <Image source={require('../../../assets/Fit4U(WhiteLOGO).png')} style={reusedStyles.appTitle} />
                <ProgressChart chartType={progressChartType} />
            </View>
            <View style={{paddingBottom: 40}}>
                {/* TODO: We need to replace these buttons with Tran's button when she finishes that. */}
                <View style={reusedStyles.buttonView}>
                    <FullWidthRectButton 
                        text='Complete a Workout'
                        backgroundColor={AppColors.SeaSerpent}
                        onPress={() => {}} 
                    />
                </View>
                <View style={reusedStyles.buttonView}>
                    <FullWidthRectButton 
                        text='Retake The Survey' 
                        backgroundColor={AppColors.White}
                        onPress={() => {}}
                    />
                </View>
                <View style={reusedStyles.buttonView}>
                    <FullWidthRectButton 
                        text='Toggle Chart Type' 
                        backgroundColor={AppColors.SeaSerpent}
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
        alignSelf: 'center',
        top: 350
    },
    appTitleContainer: {
        position: 'absolute',
        top: height<900? 30:50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    appTitle: {
        width: (width*0.48),
        height: (height*0.077),
        resizeMode: 'contain',
        marginBottom:10
    }
})
