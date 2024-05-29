import React from 'react';
import './style.css'
import Reps from './Reps';



export default function Back ({exercise, addExercise, deleteExercise, setExercise, updateExerciseNotes}){


    return(
        <div className='workouts'>
            <Reps exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise}  updateExerciseNotes={updateExerciseNotes}/>
        </div>
        
    )
}


