import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { generateDateRangeForStartDate, generateMockData, getTotalNumberOfWorkoutsCompleted } from '../helpers/ProgressChartDataHelper'
import { AppColors } from '../resources/AppColors'

type ChartProps = {
    chartType: 'compact' | 'normal'
}

export default function ProgressChart(props: ChartProps): JSX.Element {
    const mockData: WorkoutIndicatorModel[] =  generateMockData(
        new Date('2023-01-01'),
        new Date('2024-01-01')
    )

    const startDate: Date = mockData[0].dateOccured

    const chartRows = 7
    const chartCols = 18
    const currentDateRange: DateRangeModel = generateDateRangeForStartDate(startDate, chartRows, chartCols)
  
    const dateLabelFormat = 'MMM Qo'
    const startDateLabel: string = moment(currentDateRange.startDate).utc().format(dateLabelFormat)
    const middleDateLabel: string = moment(currentDateRange.middleDate).utc().format(dateLabelFormat)
    const endDateLabel: string = moment(currentDateRange.endDate).utc().format(dateLabelFormat)

    const workoutIndicatorColumns: WorkoutIndicatorModel[][] = []
    for (let i = 0; i < chartCols; i++) {
        const workoutIndicators: WorkoutIndicatorModel[] = []
        for (let j = 0; j < chartRows; j++) {
            const index = j + chartRows * i
            workoutIndicators.push(mockData[index])
        }
        workoutIndicatorColumns.push(workoutIndicators)
    }

    const indicatorOnColor: string = AppColors.SeaSerpent
    const indicatorOffColor: string = AppColors.White
    const textColor: string = AppColors.White

    const numberOfWorkoutsCompleted = getTotalNumberOfWorkoutsCompleted(mockData)

    const compactChart: JSX.Element = 
        <View style={{width: '100%', paddingHorizontal: 15}}>
            <Text style={[reusedStyles.normalText, {alignSelf: 'center', paddingBottom: 10, color: textColor}]}>{'Workout Progress'}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
                <Text style={[reusedStyles.textLabel, {color: textColor}]}>{startDateLabel}</Text>
                <Text style={[reusedStyles.textLabel, {color: textColor}]}>{middleDateLabel}</Text>
                <Text style={[reusedStyles.textLabel, {color: textColor}]}>{endDateLabel}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                { workoutIndicatorColumns.map((column: WorkoutIndicatorModel[], columnIndex: number) => 
                    <View key={columnIndex}>
                        { column.map((indicator: WorkoutIndicatorModel, rowIndex: number) => {
                            const indicatorColor: string = indicator.indicatorFlag ? indicatorOnColor : indicatorOffColor
                            const rowIsLastRow: boolean = rowIndex == chartRows - 1
                            const connectsTwoFlags: boolean = !rowIsLastRow && column[rowIndex].indicatorFlag && column[rowIndex + 1].indicatorFlag
                            const connectorColor: string = connectsTwoFlags ? indicatorOnColor : 'transparent'
                            const indicatorKey: number = rowIndex
                            const connectorKey: string = 'c' + rowIndex
                            return (
                                <>
                                    <View key={indicatorKey} style={{backgroundColor: indicatorColor, width: 10, height: 10, marginHorizontal: 5, borderRadius: 2}} />
                                    <View key={connectorKey} style={{backgroundColor: connectorColor, width: 1, height: 10, marginHorizontal: 5, alignSelf: 'center'}} />
                                </>
                            )
                        })}
                    </View>
                )}
            </View>
            <Text style={[reusedStyles.normalText, {alignSelf: 'center', paddingTop: 30, color: textColor}]}>{numberOfWorkoutsCompleted + ' workouts completed!'}</Text>
        </View>

    const weekDayLabels: string[] = ['Mon', 'Wed', 'Fri', 'Sun']

    const normalChart: JSX.Element = 
        <View style={{width: '100%', paddingHorizontal: 15}}>
            <Text style={[reusedStyles.normalText, {alignSelf: 'center', paddingBottom: 10, color: textColor}]}>{'Workout Progress'}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingLeft: 30}}>
                <Text style={[reusedStyles.textLabel, {color: textColor}]}>{startDateLabel}</Text>
                <Text style={[reusedStyles.textLabel, {color: textColor}]}>{middleDateLabel}</Text>
                <Text style={[reusedStyles.textLabel, {color: textColor}]}>{endDateLabel}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    { weekDayLabels.map((day: string, dayIndex: number) =>
                        <View key={'t' + dayIndex} style={{width: 25, height: 15, marginBottom: 5, marginRight: 10}}>
                            <Text style={[reusedStyles.textLabel, {color: textColor, textAlign: 'right'}]}>{day}</Text>
                        </View>
                    )}
                </View>
                { workoutIndicatorColumns.map((column: WorkoutIndicatorModel[], columnIndex: number) => 
                    <View key={columnIndex}>
                        { column.map((indicator: WorkoutIndicatorModel, rowIndex: number) => {
                            const indicatorColor: string = indicator.indicatorFlag ? indicatorOnColor : indicatorOffColor
                            const indicatorKey: number = rowIndex
                            return <View key={indicatorKey} style={[reusedStyles.normalChartIndicator, {backgroundColor: indicatorColor, marginHorizontal: 5, marginBottom: 5}]} />
                        })}
                    </View>
                )}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10, paddingLeft: 30}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[reusedStyles.textLabel, {color: textColor, paddingRight: 5}]}>{'Completed:'}</Text>
                    <View style={[reusedStyles.normalChartIndicator, {backgroundColor: indicatorOnColor, marginTop: 1}]}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[reusedStyles.textLabel, {color: textColor, paddingRight: 5}]}>{'Not Completed:'}</Text>
                    <View style={[reusedStyles.normalChartIndicator, {backgroundColor: indicatorOffColor, marginTop: 1}]}/>
                </View>
            </View>
            <Text style={[reusedStyles.normalText, {alignSelf: 'center', paddingTop: 30, color: textColor}]}>{numberOfWorkoutsCompleted + ' workouts completed!'}</Text>
        </View>

    return props.chartType == 'compact' ? compactChart : normalChart
}

const reusedStyles = StyleSheet.create({
    normalText: {
        fontWeight: '700', 
        fontSize: 20
    },
    textLabel: {
        fontWeight: '400',
        fontSize: 12
    },
    normalChartIndicator: {
        width: 15,
        height: 15,
        borderRadius: 2
    }
})