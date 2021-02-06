import React,{useState,useEffect} from 'react';
let location = "";
fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    location = data.city+", "+data.region;
  });

const ClockApp=()=>{
 //   cali time working but showing errors so I'm skipping for now.
 //   const [time, setTime]=useState(getTimeString().[0]);
    const [time, setTime]=useState(getTimeString());

 //   const [caliTime, setCaliTime]=useState(getTimeString().[1]);
    useEffect(()=>{
        const interval=setInterval(()=>{
            let date=getTimeString();
            setTime(date);
  
            // setTime(date[0]);
            // setCaliTime(date[1])

        },1000);
        return ()=>clearInterval(interval);
    },[])
    return(
        <div className="section-title">
            <h1>React Clock</h1>
            <hr className="explanation"/>
            <p>The time in {location} is {time}</p>
            {/* <p>The time in California is {caliTime}</p> */}

        </div>
    )
}

export default ClockApp;

const getTimeString=()=>{
    const date=new Date(Date.now()).toLocaleTimeString();
    // const caliDate=new Date(Date.now()-1000*60*60*3).toLocaleTimeString();
    // return [date,caliDate]
    return date;
}
