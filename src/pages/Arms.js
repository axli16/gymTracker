import React, {useState, useEffect, useRef} from 'react';

import './style.css'
import journal from './images/journal.svg';


export default function Arms ({exercise, addExercise, deleteExercise}){
    const handleBoxClick = (boxName) => {
        const newEndpoint = `/${boxName}`;
        window.location.href=newEndpoint;
      };

      const [notepads, setNotepads] = useState([]);
      const textareaRef = useRef(null);


      useEffect(() => {
        const handleClickOutside = (event) => {
          if (textareaRef.current && !textareaRef.current.contains(event.target)) {
            closeNotepads();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      useEffect(() => {
        localStorage.setItem('notepads', JSON.stringify(notepads));
      }, [notepads]);
    
      const openNotepad = () => {
        const newNotepadId = Date.now().toString();
        setNotepads([...notepads, { id: newNotepadId, content: '' }]);
      };
    
      const closeNotepad = (id) => {
        setNotepads(notepads.filter((notepad) => notepad.id !== id));
      };
    
      const closeNotepads = () => {
        setNotepads([]);
      };
    
      const handleChange = (id, content) => {
        const updatedNotepads = notepads.map((notepad) =>
          notepad.id === id ? { ...notepad, content } : notepad
        );
        setNotepads(updatedNotepads);
      };
    
    return(
        <>
        <div className='workouts'>
            <button className="x-button" onClick={() => handleBoxClick('')}>X</button>
            <button className="addButton" onClick={() => addExercise()}>+</button>
            <h1 className="group">Arms</h1>
            {exercise.map((exercises) =>(
                <div className="box-container" >
                
                    <button className="tag" onClick={() => handleBoxClick("Pull")}>{exercises.title}</button>
                        
                    <div className="box">
                        
                        <h2 className="Set">Set 1</h2>
                        <input type="number" className= "styled-input" placeholder="Weight(lb)" />
                        <input type="number" className= "styled-input" placeholder="Reps" />
                        <h2 className="Set">Set 2</h2>
                        <input type="number" className= "styled-input" placeholder="Weight(lb)" />
                        <input type="number" className= "styled-input" placeholder="Reps" />
                        <h2 className="Set">Set 3</h2>
                        <input type="number" className= "styled-input" placeholder="Weight(lb)" />
                        <input type="number" className= "styled-input" placeholder="Reps" />
                        <button onClick={openNotepad}>
                            <img src={journal} alt='journal'/>
                        </button>
                        <div>
                            {notepads.map((notepad) => (
                            <div key={notepad.id} className="modal">
                                <div className="modal-content">
                                <span className="close" onClick={() => closeNotepad(notepad.id)}>
                                    &times;
                                </span>
                                <textarea
                                    ref={textareaRef}
                                    value={notepad.content}
                                    onChange={(e) => handleChange(notepad.id, e.target.value)}
                                    className="note-textarea"
                                    placeholder="Type something..."
                                ></textarea>
                                </div>
                            </div>
                            ))}
                        </div>
                        <button className='deleteButton' onClick={() => deleteExercise(exercise.id)}>X</button>
                    </div>
                    <div>
                        <button type="submit" class="styled-button">Submit</button>
                    </div>
                </div>
            ))}
            
            
        </div>

        </>
    )
}


