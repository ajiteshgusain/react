import React,{useState} from "react";


function Counter(){
    const [count,setCount]=useState(0);
    const btn={padding:'6px 12px',margin:'5px',
        fontSize:'30px'}

    const increment=()=>{
        setCount(count+1)

    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset =()=>{
        setCount(0)
    }
    return(
        <div style={{textAlign:"center",marginTop:40}}>
            <h2>count: {count}</h2>

            <button style={btn} onClick={increment}>+</button>
            <button style={btn} onClick={decrement}>-</button>
            <button style={btn}  onClick={reset}>reset</button>
       
        </div>
    )
    

    }






export default Counter