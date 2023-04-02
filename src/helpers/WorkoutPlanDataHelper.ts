export function workoutSetUsesReps(
    workoutSet: WorkoutSetWithReps | WorkoutSetWithTime
): workoutSet is WorkoutSetWithReps {
    return 'reps' in workoutSet
}

export function convertSecondsToTimeFormat(seconds: number): string {
    const date = new Date(0)
    date.setSeconds(seconds)
    return date.toISOString().substring(14, 19)
}

export function getFakeWorkoutPlan(): WorkoutModel[] {
    return [
        {
            name: 'Lunge (Dumbbell)',
            sets: [
                {
                    weight: 25,
                    reps: 12
                }, {
                    weight: 25,
                    reps: 12
                }, {
                    weight: 25,
                    reps: 12
                }
            ]
        }, {
            name: 'Drag Curl (Dumbbell)',
            sets: [
                {
                    weight: 25,
                    reps: 12
                }, {
                    weight: 25,
                    reps: 12
                }, {
                    weight: 25,
                    reps: 12
                }
            ]
        }, {
            name: 'Lateral Raise (Dumbbell)',
            sets: [
                {
                    weight: 25,
                    reps: 12
                }, {
                    weight: 25,
                    reps: 12
                }, {
                    weight: 25,
                    reps: 12
                }
            ]
        }, {
            name: 'Plank',
            sets: [
                {
                    seconds: 45
                }, {
                    seconds: 45
                }, {
                    seconds: 45
                }
            ]
        }
    ]
}