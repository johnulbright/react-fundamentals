import React, {useState,useEffect} from 'react';

// const Hooks=()=>{
//     const [query,setQuery]=useState('');
//     const [results, setResults]=useState('');
//     const fetcher=()=>{fetch(`https://swapi.dev/api/people/${query}`)
//     .then(res=>res.json())
//     .then(json=>{
//         console.log(json);
//         setResults(json);
//     })}



//     return(
//         <div className="main">
//             <div className="mainDiv">
//                 <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Enter your sw character number"/>
//                 <button onClick={()=>fetcher()}>Submit</button>
//                 {results ? <h2>{results.detail==="Not found"? "Character not found":results.name}</h2> : <div></div>}
//             </div>
//         </div>
//     )
// }

const Hooks2=()=>{
    const [results,queryNum,setQueryNum]=useNumHook('');
    const [clicks,setClicks]=useClicks(0);
    
    return (
        <div className="main">
            <div className="mainDiv">
                <h3>Enter a number below to see a number fact.</h3>
                <input value={queryNum} onChange={e=>setQueryNum(e.target.value)} placeholder="Enter a number"/>
                <button onClick={()=>setClicks(clicks+1)}>Click to update document title</button>

                {results?<h2>{results}</h2> :<> </>}
            </div>
        </div>
    )
}

const useClicks=(num)=>{
    const [clicks,setClicks]=useState(num);
    useEffect(()=>{
        document.title=`You have clicked ${clicks} times!`;},[clicks]
    )
    return [clicks,setClicks];
}

const useNumHook=(num)=>{

    const [queryNum,setQueryNum]=useState(num);
    const [results, setResults]=useState('');
    useEffect(()=>{
        if(queryNum!==''){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res=>res.text())
            .then(json=>{
                setResults(json);
                console.log(json)
            })
        }
    },[queryNum])
    return [results,queryNum,setQueryNum];

}

export default Hooks2;