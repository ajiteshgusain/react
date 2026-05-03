import { useEffect } from "react";

function  UsingEffect(){


    //🔥 Case 1: Run ONLY once (very important)


    useEffect(()=>{
        console.log(" component loaded ");
    },[]);

    return(
        <h1>Hello</h1>
    )
    // 👉 [] = empty dependency
    // ➡️ Runs only ONCE (on page load)



}


export default UsingEffect;

