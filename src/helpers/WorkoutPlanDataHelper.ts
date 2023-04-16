import axios from 'axios';
import { fetchExercises } from '../../backend/workoutAPI/exercises';

//The value of selectedChoice is what would be passed into the generateWorkoutPlan function
//import { selectedChoice } from '../screens/survey/5Relationship';

export interface ExerciseModel {
    name: string;
    category: string;
    sets: SetModel[];
  }
  
  export interface SetModel {
    weight?: number;
    reps?: number;
    seconds?: number;
  }
  
  export interface WorkoutModel {
    name: string;
    sets: SetModel[];
  }

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

export const getWorkoutPlan = async (exp_level: number): Promise<WorkoutModel[]> => {
  const exercises = await fetchExercises();

  // Get only exercises that are resistance or cardio
  const filteredExercises = exercises.filter((exercise: any) => {
    return exercise.category === 9 || exercise.category === 10;
  });

  // Take the first 10 exercises
  const selectedExercises = filteredExercises.slice(0, 10);

  // Map the selected exercises to WorkoutModels
  const workoutPlan: WorkoutModel[] = selectedExercises.map((exercise: any) => {
    let set: SetModel;
    if (exercise.category === 9) {
      // Resistance exercise
      switch (exp_level) {
        case 1:
          set = { weight: 10, reps: 12 };
          break;
        case 2:
          set = { weight: 20, reps: 12 };
          break;
        case 3:
          set = { weight: 25, reps: 12 };
          break;
        default:
          set = { weight: 10, reps: 12 };
      }
    } else {
      // Cardio exercise
      switch (exp_level) {
        case 1:
          set = { seconds: 30 };
          break;
        case 2:
          set = { seconds: 60 };
          break;
        case 3:
          set = { seconds: 90 };
          break;
        default:
          set = { seconds: 30 };
      }
    }
    return { name: exercise.name, sets: [set] };
  });

  return workoutPlan;
};
  
