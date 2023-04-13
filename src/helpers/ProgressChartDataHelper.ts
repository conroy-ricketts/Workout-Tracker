export function generateMockData(startDate: Date, endDate: Date): WorkoutIndicatorModel[] {
    const workoutProbability = 0.8
    const returnList: WorkoutIndicatorModel[] = []

    for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
        const workoutOccurred: boolean = Math.random() < workoutProbability

        returnList.push({
            dateOccured: new Date(i),
            indicatorFlag: workoutOccurred
        })
    }

    return returnList
}

export function generateDateRangeForStartDate(startDate: Date, chartRows: number, chartCols: number): DateRangeModel {
    const firstRowMiddleCol: number = (Math.floor(chartCols / 2) * chartRows) + 1
    const firstRowLastCol: number = ((chartCols - 1) * chartRows) + 1

    const middleDate: Date = new Date(startDate)
    middleDate.setDate(middleDate.getDate() + firstRowMiddleCol)

    const endDate: Date = new Date(startDate)
    endDate.setDate(endDate.getDate() + firstRowLastCol)

    return {
        startDate: startDate,
        middleDate: middleDate,
        endDate: endDate
    }
}

export function getTotalNumberOfWorkoutsCompleted(workoutData: WorkoutIndicatorModel[]) {
    let numberOfWorkoutsCompleted = 0
    workoutData.forEach((workoutIndicatorModel) => {
        if (workoutIndicatorModel.indicatorFlag) numberOfWorkoutsCompleted++
    })
    return numberOfWorkoutsCompleted
}