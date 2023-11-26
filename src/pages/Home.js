import React, { useState } from 'react';
//import React from "react";
import '../App.css'; // You can create your own CSS file for styling

const Box = ({ color, title, onClick }) => {
    const boxStyle = {
      backgroundColor: color,
      width: '80px', // Increase the width and height
      height: '80px',
      margin: '10px', // Adjust margin for spacing
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px', // Apply rounded corners
      cursor: 'pointer',
    };
  
    const textStyle = {
      color: 'white', // Text color
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
          { color: 'red', title: 'Chest', onClick: () => handleBoxClick('Chest') },
          { color: 'black', title: 'Shoulder', onClick: () => handleBoxClick('Shoulder') },
          { color: 'red', title: 'Arms', onClick: () => handleBoxClick('Arms') },
          { color: 'black', title: 'Legs', onClick: () => handleBoxClick('Legs') },
        ],
        [
          { color: 'black', title: 'Back', onClick: () => handleBoxClick('Back') },
          { color: 'red', title: 'Core', onClick: () => handleBoxClick('Core') },
          { color: 'black', title: 'Cardio', onClick: () => handleBoxClick('Cardio') },
        ],
      ]);
    
      const handleBoxClick = (boxName) => {
        const newEndpoint = `/${boxName}`;
        window.location.href=newEndpoint;
      };

      
    return(
        <div className='App'>
            <header>Workout</header>
            {rows.map((boxes, rowIndex) => (
                <RowOfBoxes key={rowIndex} boxes={boxes} />
            ))}
        </div>
    )
}

