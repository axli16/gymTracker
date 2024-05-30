import React, {useState, useEffect, useRef} from 'react';
import './style.css'
import journal from './images/journal.svg';
import History from './History';
import { useNavigate } from 'react-router-dom';

export default function Reps({exercise, addExercise, deleteExercise, updateExerciseNotes,section,addSideBarContent, inputValues, setInputValues,sidebarContent, setSidebarContent,deleteSideBarContent}){
    const handleBoxClick = (boxName) => {
        const newEndpoint = `/${boxName}`;
        navigate(newEndpoint);

      };
      const navigate = useNavigate();
      
    const [openNotepadId, setOpenNotepadId] = useState(null);
    const textareaRef = useRef(null);
    const modalContentRef = useRef(null);
    const [name,setName]=useState('')

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
    

    const toggleSidebar = (ex) => {
      setName(ex.toString());
      setIsOpen(!isOpen);
    };
    
    const handleInputChange = (exerciseId, Name, value) => {
      setInputValues(prevState => ({
        ...prevState,
        [exerciseId]: {
          ...prevState[exerciseId],
          [Name]: value,
        }
      }));
    };
    const clearInputValues = (exerciseId) => {
      setInputValues(prevInputValues => ({
          ...prevInputValues,
          [exerciseId]: { weight1: '', reps1: '', weight2: '', reps2: '', weight3: '', reps3: '' }
      }));
  };

  return(
    <>
    <div className={`Reps ${isOpen ? 'shift-right' : ''}`}>
        <button className="x-button" onClick={() => handleBoxClick('')}>X</button>
        <button className="addButton" onClick={() => addExercise(section)}>+</button>
        <h1 className="group">{section}</h1>
        {exercise.filter((exercise)=> exercise.section===section).map((exercises) =>(
            <div key ={exercise.id} className="box-container" >
                <button className="tag" onClick={() => toggleSidebar(exercises.title)}>
                  {exercises.title}
                </button>
                <div className="box">
                    <h2 className="Set">Set 1</h2>
                    <input 
                    type="number" 
                    className= "styled-input" 
                    placeholder="Weight(lb)"  
                    value={inputValues[exercises.id]?.weight1 || ''}
                    onChange={e=>handleInputChange(exercises.id, 'weight1', e.target.value)}/>
                    <input 
                    type="number" 
                    className= "styled-input" 
                    placeholder="Reps"
                    value={inputValues[exercises.id]?.reps1 || ''}
                    onChange={e => handleInputChange(exercises.id, 'reps1', e.target.value)} />
                    <h2 className="Set">Set 2</h2>
                    <input 
                    type="number" 
                    className= "styled-input" 
                    placeholder="Weight(lb)"
                    value={inputValues[exercises.id]?.weight2 || ''}
                    onChange={e => handleInputChange(exercises.id, 'weight2', e.target.value)} />
                    <input 
                    type="number" 
                    className= "styled-input" 
                    placeholder="Reps"
                    value={inputValues[exercises.id]?.reps2 || ''}
                    onChange={e => handleInputChange(exercises.id, 'reps2', e.target.value)} />
                    <h2 className="Set">Set 3</h2>
                    <input
                    type="number" 
                    className= "styled-input" 
                    placeholder="Weight(lb)"
                    value={inputValues[exercises.id]?.weight3 || ''}
                    onChange={e => handleInputChange(exercises.id, 'weight3', e.target.value)} />
                    <input
                    type="number" 
                    className= "styled-input" 
                    placeholder="Reps"
                    value={inputValues[exercises.id]?.reps3 || ''}
                    onChange={e =>handleInputChange(exercises.id, 'reps3', e.target.value)} />
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
                    <button type="submit" className="styled-button"onClick={()=>{addSideBarContent(exercises); clearInputValues(exercises.id);}}>Submit</button>
                </div>
            </div>
        ))}
        
        <History isOpen={isOpen} titleName={name} content={sidebarContent} setSidebarContent={setSidebarContent}/>

    </div>

    </>
  )
}
