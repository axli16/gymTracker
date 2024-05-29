import React, { useState } from 'react';
import '../App.css'; // You can create your own CSS file for styling

const Box = ({ color, title, onClick }) => {
    const boxStyle = {
      backgroundColor: color,
      width: '10%', // Increase the width and height
      height: '100px',
      margin: '10px', // Adjust margin for spacing
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px', // Apply rounded corners
      cursor: 'pointer',
    };
  
    const textStyle = {
      color: '#FFFFFF', // Text color
      fontWeight: 'bold',
    };
  
    return (
      <div style={boxStyle} onClick={onClick}>
        <p style={textStyle}>{title}</p>
      </div>
    );
  };
  
  const RowOfBoxes = ({ boxes }) => {
    return (
      <div>
        {boxes.map((box, index) => (
          <Box key={index} color={box.color} title={box.title} onClick={box.onClick} />
        ))}
      </div>
    );
  };

export default function Home(){
  
    const [rows, setRows] = useState([
        [
          { color: '#da1a32', title: 'Chest', onClick: () => handleBoxClick('Chest') },
          { color: '#a00c30', title: 'Shoulder', onClick: () => handleBoxClick('Shoulder') },
          { color: '#da1a32', title: 'Arms', onClick: () => handleBoxClick('Arms') },
          { color: '#a00c30', title: 'Legs', onClick: () => handleBoxClick('Legs') },
        ],
        [
          { color: '#da1a32', title: 'Back', onClick: () => handleBoxClick('Back') },
          { color: '#a00c30', title: 'Core', onClick: () => handleBoxClick('Core') },
          { color: '#da1a32', title: 'Cardio', onClick: () => handleBoxClick('Cardio') },
        ],
      ]);
    
      const handleBoxClick = (boxName) => {
        const newEndpoint = `/${boxName}`;
        window.location.href=newEndpoint;
      };

      
    return(
        <div className='App'>
            <header className='Home'>Workouts</header>
            {rows.map((boxes, rowIndex) => (
                <RowOfBoxes key={rowIndex} boxes={boxes} />
            ))}
        </div>
    )
}

