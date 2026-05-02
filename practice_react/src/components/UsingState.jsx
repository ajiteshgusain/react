import { useState } from "react";

// using  usestate we are going to build a counter app
function UsingState(){
    const[count,setcount]=useState(0)

    return(
        <div>

            <p>{count}</p>

            <button onClick={() => setcount(count + 1)}>+</button>

            <button onClick={()=>setcount(count - 1)}>-</button>
            <button onClick={()=>{setcount(0)}}>reset</button>
        </div>
    )



}

export default UsingState;