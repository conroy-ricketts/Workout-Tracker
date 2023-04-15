// TODO: We should be using the backend and not a temporary array to store data.
let tempData: WorkoutIndicatorModel[] = []

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

export function getTotalNumberOfWorkoutsCompleted() {
    let numberOfWorkoutsCompleted = 0
    tempData.forEach((workoutIndicatorModel) => {
        if (workoutIndicatorModel.indicatorFlag) numberOfWorkoutsCompleted++
    })
    return numberOfWorkoutsCompleted
}

// TODO: These next 2 functions should not exist. We should be using the backend for this.
export function storeWorkout(dateOccured: Date) {
    tempData.push({
        dateOccured: dateOccured,
        indicatorFlag: true
    })
}

export function getWorkoutData(): WorkoutIndicatorModel[] {
    return tempData
}