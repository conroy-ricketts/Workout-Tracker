import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { convertSecondsToTimeFormat, getFakeWorkoutPlan, workoutSetUsesReps } from '../../helpers/WorkoutPlanDataHelper'
import { AppColors } from '../../resources/AppColors'

export default function WorkoutPlanScreen(): JSX.Element {
    // TODO: Use real data once backend is finished.
    const workoutPlan = getFakeWorkoutPlan()

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: AppColors.MaastrichtBlue}}>
            <Text style={{fontWeight: '700', fontSize: 20, alignSelf: 'center', color: AppColors.White, paddingBottom: 20}}>
                {'Your Optimal Workout'}
            </Text>
            <ScrollView>
                { workoutPlan.map((workout: WorkoutModel, workoutIndex: number) => {
                    const workoutUsesReps: boolean = workoutSetUsesReps(workout.sets[0])

                    return (
                        <View key={'i' + workoutIndex}>
                            <Text style={[reusedStyles.normalText, {color: AppColors.SeaSerpent, paddingLeft: 10}]}>
                                {workout.name}
                            </Text>
                            { workoutUsesReps ? 
                                <View style={reusedStyles.gridRow}>
                                    <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                        {'Set'}
                                    </Text>
                                    <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                        {'Lbs'}
                                    </Text>
                                    <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                        {'Reps'}
                                    </Text>
                                </View> : 
                                <View style={reusedStyles.gridRow}>
                                    <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                        {'Set'}
                                    </Text>
                                    <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                        {'Time'}
                                    </Text>
                                    {/* Leaving this text blank for a fake column. */}
                                    <Text style={{width: 50}}>
                                    </Text>
                                </View>
                            }
                            { workout.sets.map((set: WorkoutSetWithReps | WorkoutSetWithTime, setIndex:number) =>
                                <View key={'j' + setIndex}>
                                    { workoutUsesReps ? 
                                        <View style={reusedStyles.gridRow}>
                                            <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                                {setIndex + 1}
                                            </Text>
                                            <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                                {(set as WorkoutSetWithReps).weight}
                                            </Text>
                                            <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                                {(set as WorkoutSetWithReps).reps}
                                            </Text>
                                        </View> : 
                                        <View style={reusedStyles.gridRow}>
                                            <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                                {setIndex + 1}
                                            </Text>
                                            <Text style={[reusedStyles.normalText, reusedStyles.gridTextBlock, {color: AppColors.White}]}>
                                                {convertSecondsToTimeFormat((set as WorkoutSetWithTime).seconds)}
                                            </Text>
                                            {/* Leaving this text blank for a fake column. */}
                                            <Text style={{width: 50}}>
                                            </Text>
                                        </View>
                                    }
                                </View>
                            )}
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const reusedStyles = StyleSheet.create({
    normalText: {
        fontWeight: '700', 
        fontSize: 18
    },
    gridTextBlock: {
        width: 50,
        textAlign: 'center'
    },
    gridRow: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        paddingVertical: 10
    }
})