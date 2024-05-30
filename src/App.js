
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
  const [section]=useState([
    "Back",
    "Arms",
    "Cardio",
    "Chest",
    "Core",
    "Legs",
    "Shoulder"
  ])
  const [exercise, setExercise] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [sidebarContent, setSidebarContent] = useState([]);

  const addExercise = (section) => {
    const title = prompt("Enter exercise title:");
    if (title) {
      const newExercise = {
        id: uuid(),
        section:section,
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
  
  const addSideBarContent =(exercises) =>{
    let now1 = new Date();
    const newEntry = {
      set1: { weight: inputValues[exercises.id]?.weight1 || '', reps: inputValues[exercises.id]?.reps1 || '' },
      set2: { weight: inputValues[exercises.id]?.weight2 || '', reps: inputValues[exercises.id]?.reps2 || '' },
      set3: { weight: inputValues[exercises.id]?.weight3 || '', reps: inputValues[exercises.id]?.reps3 || '' },
      notes: exercises ? exercises.notes : '',
      title: exercises ? exercises.title : '',
      date:now1
    };
    setSidebarContent([...sidebarContent, newEntry]);

    console.log([...sidebarContent, newEntry]); // Log the updated sidebar content
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home exercise={exercise}/>}/>
        <Route path="Chest" element ={<Chest exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[3]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
        <Route path="Shoulder" element ={<Shoulder exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[6]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
        <Route path="Arms" element ={<Arms exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[1]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
        <Route path="Legs" element ={<Legs exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[5]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
        <Route path="Back" element ={<Back exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[0]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
        <Route path="Core" element ={<Core exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[4]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
        <Route path="Cardio" element ={<Cardio exercise={exercise} addExercise={addExercise} deleteExercise={deleteExercise} updateExerciseNotes={updateExerciseNotes} section={section[2]} addSideBarContent={addSideBarContent} inputValues={inputValues} setInputValues={setInputValues} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
};

export default App;