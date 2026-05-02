import {useState}  from "react";

function MiniProject(){
    const[name,setname]=useState("")
    return(
        <div>
            <h1>welcome App</h1>
            <input type="text"
                   placeholder="enter name"
                   onChange={(e)=> setname(e.target.value)}
             />
             <h2>hello {name}</h2>
            
        </div>
    );
}
export default MiniProject;





// 👉 This is where the magic happens ✨

// Break it:

// e = event (what user types)
// e.target.value = current text inside input
// setName(...) = updates state

// 💡 Flow:

// User types → event fires → value captured → state updates