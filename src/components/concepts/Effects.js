import React, {useState, useEffect} from 'react';

const Effects=()=>{
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Below are somme important points regarding effects</h2>
                <ul>
                    <li>They are triggered with state and prop updates, as well as after initial render to the DOM.</li>
                    <li>Effects are used to trigger certain actions besed upon changes to he component.</li>
                    <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside APIs, and other functions which may use system resouces.</li>
                </ul>
                <SampleEffect />
                <br/>
                <SampleEffect />
            </div>
        </div>
    )
}

const SampleEffect=()=>{
    const [timerRunning,setTimerRunning]=useState(false);
    useEffect(()=>{
        console.log("We initiated a change!")
    });
    let buttonHandler=()=>{
        if(!timerRunning){
            setTimerRunning(true);
        }
    }
    return(
        <div style={{border:'1px dashed black'}}>
            <h2>This component demos an effect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    )
}



export default Effects;