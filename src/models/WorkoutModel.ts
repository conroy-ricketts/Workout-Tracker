interface WorkoutModel {
    name: string,
    sets: WorkoutSetWithReps[] | WorkoutSetWithTime[],
}

interface WorkoutSetWithReps {
    weight: number,
    reps: number,
}

interface WorkoutSetWithTime {
    seconds: number
}