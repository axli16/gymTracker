import React from "react";
import './Arms.css'

export default function Arms (){

    const handleBoxClick = () => {
        const newEndpoint = `/`;
        window.location.href=newEndpoint;
      };
    return(
        <>
        <div className="Arms">
            <h1>Arms</h1>
            <div class="box-container">
            <div class="box">
                <input type="text" placeholder="Weight(lb)" />
                <input type="number" placeholder="Reps" />
            </div>
            <div class="box">
                <input type="number" placeholder="Reps" />
            </div>
            </div>
        </div>

        </>
    )
}