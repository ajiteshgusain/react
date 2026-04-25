import { useState } from "react";

function App(){
  const[para,setPara]=useState("welcome to javascript")
  
  
  
  
  function clickHandler(){
    
    if(para ==="welcome to javascript")
      {setPara("welcome to feel the magic of react js")

      }else{
        setPara("welcome to javascript")
      
      }
    }

  return(
    <div>
      <p>{para}</p>
      <button onClick={clickHandler}>click me please</button>


    </div>
  );

}


export default App 


// import { useState } from "react";

// function App() {
//   // 1. State must be inside the component
//   const [para, setPara] = useState("welcome to javascript");

//   // 2. Functions that use that state must also be inside
//   function clickHandler() {
//     if (para === "welcome to javascript") {
//       setPara("welcome to feel the magic of react js");
//     } else {
//       setPara("welcome to javascript");
//     }
//   }

//   // 3. The return UI must be inside
//   return (
//     <div>
//       <p>{para}</p>
//       <button onClick={clickHandler}>click me please</button>
//     </div>
//   );
// }

// export default App; // Don't forget to export it!