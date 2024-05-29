import React from "react";
import './style.css'

export default function Core (){
    const handleBoxClick = (boxName) => {
        const newEndpoint = `/${boxName}`;
        window.location.href=newEndpoint;
      };
    return(
        <>
        <div className="Back">
            <button className="x-button" onClick={() => handleBoxClick('')}>X</button>
            <h1 className="group">Core</h1>
            <div className="box-container">
            
                <button className="tag" onClick={() => handleBoxClick('Pullup')}>Leg raises</button>
                    
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

                </div>
                <div>
                    <button type="submit" class="styled-button">Submit</button>
                </div>
            </div>
            <div className="box-container">
            
                <button className="tag" onClick={() => handleBoxClick('Rows')}>Rows</button>
                    
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

                </div>
                <div>
                    <button type="submit" class="styled-button">Submit</button>
                </div>
            </div>
        </div>

        </>
    )
}