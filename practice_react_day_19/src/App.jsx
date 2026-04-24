import { useState } from "react";

function App(){
  const[para,setPara]=useState("welcome to javascript")
}

function clickHandler(){
  if(para ==="welcome to javascript"){
    setPara("welcome to feel the magic of react js")

  }else{
    setPara("welcome to javascript")

  }

  return(
    <div>
      <p>{para}</p>
      <button onClick={clickHandler}>click me please</button>


    </div>
  )

}

export default App 