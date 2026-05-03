import { useEffect, useState } from "react";

function  UsingEffect(){


    //🔥 Case 1: Run ONLY once (very important)


    // useEffect(()=>{
    //     console.log(" component loaded ");
    // },[]);

    // return(
    //     <h1>Hello</h1>
    //)
    // 👉 [] = empty dependency
    // ➡️ Runs only ONCE (on page load)

    //🔥 Case 2: Run when state changes

    // const[count,setcount]=useState(0)

    // useEffect(()=>{
    //     console.log("count changed:",count);
    // },[count]);
    // return(
    //     <div>
    //         <p>{count}</p>

    //         <button onClick={()=>{  setcount(count+1)}}>click</button>
    //     </div>
    // )

    //Case 3: No dependency array :-  runs every time  


    useEffect(()=>{
        console.log("run every time.")
    })


    return(
        <h1>  no depenency array </h1>
    )



}


export default UsingEffect;

