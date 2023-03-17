import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { generateDateRangeForStartDate, generateMockData } from '../helpers/ProgressChartDataHelper'
import { AppColors } from '../resources/AppColors'

export default function ProgressChart(): JSX.Element {
    let mockData: WorkoutIndicatorModel[] =  generateMockData(
        new Date('2023-01-01'),
        new Date('2024-01-01')
    )

    let startDate: Date = mockData[0].dateOccured

    let chartRows: number = 7
    let chartCols: number = 18
    let currentDateRange: DateRangeModel = generateDateRangeForStartDate(startDate, chartRows, chartCols)
  
    let dateLabelFormat: string = 'MMM Qo'
    let startDateLabel: string = moment(currentDateRange.startDate).utc().format(dateLabelFormat)
    let middleDateLabel: string = moment(currentDateRange.middleDate).utc().format(dateLabelFormat)
    let endDateLabel: string = moment(currentDateRange.endDate).utc().format(dateLabelFormat)

    let workoutIndicatorColumns: WorkoutIndicatorModel[][] = []
    for (let i = 0; i < chartCols; i++) {
        let workoutIndicators: WorkoutIndicatorModel[] = []
        for (let j = 0; j < chartRows; j++) {
            let index = j + chartRows * i
            workoutIndicators.push(mockData[index])
        }
        workoutIndicatorColumns.push(workoutIndicators)
    }

    // TODO: We need to vary these colors based off of the user's theme (light theme or dark theme)
    let indicatorOnColor: string = AppColors.SeaSerpent
    let indicatorOffColor: string = AppColors.MaastrichtBlue
    let textColor: string = AppColors.MaastrichtBlue

    return (
        <View style={{width: '100%', paddingHorizontal: 15}}>
            <Text style={{fontWeight: '700', fontSize: 20, alignSelf: 'center', paddingBottom: 10, color: textColor}}>{'Workout Progress'}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
                <Text style={[reusedStyles.dateLabel, {color: textColor}]}>{startDateLabel}</Text>
                <Text style={[reusedStyles.dateLabel, {color: textColor}]}>{middleDateLabel}</Text>
                <Text style={[reusedStyles.dateLabel, {color: textColor}]}>{endDateLabel}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                { workoutIndicatorColumns.map((column: WorkoutIndicatorModel[], columnIndex: number) => 
                    <View key={columnIndex}>
                        { column.map((indicator: WorkoutIndicatorModel, rowIndex: number) => {
                            let indicatorColor: string = indicator.indicatorFlag ? indicatorOnColor : indicatorOffColor
                            let rowIsLastRow: boolean = rowIndex == chartRows - 1
                            let connectsTwoFlags: boolean = !rowIsLastRow && column[rowIndex].indicatorFlag && column[rowIndex + 1].indicatorFlag
                            let connectorColor: string = connectsTwoFlags ? indicatorOnColor : 'transparent'
                            let indicatorKey: number = rowIndex
                            let connectorKey: number = (rowIndex + 1) * 2
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
        </View>
    )
}

const reusedStyles = StyleSheet.create({
    dateLabel: {
        fontWeight: '400',
        fontSize: 12
    }
})