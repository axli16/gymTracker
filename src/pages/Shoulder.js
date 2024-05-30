import React from 'react';
import './style.css'
import Reps from './Reps';



export default function Shoulder ({exercise, addExercise, deleteExercise, updateExerciseNotes,section ,addSideBarContent,inputValues, setInputValues,sidebarContent, setSidebarContent}){


    return(
        <div className='workouts'>
            <Reps exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise}  updateExerciseNotes={updateExerciseNotes} section={section} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>
        </div>
        
    )
}