import React, {useState, useEffect, useRef} from 'react';
import './style.css'
import journal from './images/journal.svg';
import History from './History';

export default function Reps({exercise, addExercise, deleteExercise, updateExerciseNotes}){
    const handleBoxClick = (boxName) => {
        const newEndpoint = `/${boxName}`;
        window.location.href=newEndpoint;
      };
    
    const [openNotepadId, setOpenNotepadId] = useState(null);
    const textareaRef = useRef(null);
    const modalContentRef = useRef(null);

    const openNotepad = (id) => {
      setOpenNotepadId(id)
    };

  
    const closeNotepad = () => {
      setOpenNotepadId(null);
    };

    const handleChange = (id, value) => {
      updateExerciseNotes(id, value)
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
          closeNotepad();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    const [isOpen, setIsOpen] = useState(false);
    const [sidebarContent, setSidebarContent] = useState(null);

    const toggleSidebar = (content) => {
      setSidebarContent(content);
      setIsOpen(!isOpen);
    };
    
  return(
    <>
    <div className={`Reps ${isOpen ? 'shift-right' : ''}`}>
        <button className="x-button" onClick={() => handleBoxClick('')}>X</button>
        <button className="addButton" onClick={() => addExercise()}>+</button>
        <h1 className="group">Back</h1>
        {exercise.map((exercises) =>(
            <div key ={exercise.id} className="box-container" >
                <button className="tag" onClick={() => toggleSidebar({ title: exercises.title })}>
                  {exercises.title}
                </button>
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
                    <button className="journal" onClick={() => openNotepad(exercises.id)}>
                        <img src={journal} alt='journal'/>
                    </button>
                    {openNotepadId === exercises.id && (
                        <div className="modal">
                          <div ref={modalContentRef} className="modal-content">
                            <span className="close" onClick={closeNotepad}>
                              &times;
                            </span>
                            <textarea
                              ref={textareaRef}
                              value={exercises.notes}
                              onChange={(e) => handleChange(exercises.id, e.target.value)}
                              className="note-textarea"
                              placeholder="Type something..."
                            ></textarea>
                          </div>
                        </div>
                      )}
                  <button className='deleteButton' onClick={() => deleteExercise(exercises.id)}>X</button>
                </div>
                <div>
                    <button type="submit" className="styled-button">Submit</button>
                    {/* need to add onCLick for this  */}
                </div>
            </div>
        ))}
        
        <History isOpen={isOpen} content={sidebarContent}/>

    </div>

    </>
  )
}
