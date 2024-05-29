
import './App.css'; // You can create your own CSS file for styling
import Home from './pages/Home';
import Chest from './pages/Chest';
import Shoulder from './pages/Shoulder';
import Arms from './pages/Arms';
import Legs from './pages/Legs';
import Back from './pages/Back';
import Core from './pages/Core';
import Cardio from './pages/Cardio';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import uuid from 'react-uuid';
import React, {useState} from 'react';


function App  () {
  const [exercise, setExercise] = useState([]);



  const addExercise = () => {
    const title = prompt("Enter exercise title:");
    if (title) {
      const newExercise = {
        id: uuid(),
        title: title,
        notes: ""
      };
      setExercise([newExercise, ...exercise]);
    }
  };

  const deleteExercise = (idToDelete) => {
    setExercise(exercise.filter((exercises) => exercises.id !== idToDelete ));
  };

  const updateExerciseNotes = (idToUpdate, newNotes) => {
    setExercise(exercise.map((ex) =>
      ex.id === idToUpdate ? { ...ex, notes: newNotes } : ex
    ));
  };
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home />}/>
        <Route path="Chest" element ={<Chest />}/>
        <Route path="Shoulder" element ={<Shoulder />}/>
        <Route path="Arms" element ={<Arms exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise}/>}/>
        <Route path="Legs" element ={<Legs />}/>
        <Route path="Back" element ={<Back exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes}/>}/>
        <Route path="Core" element ={<Core />}/>
        <Route path="Cardio" element ={<Cardio />}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
};

export default App;