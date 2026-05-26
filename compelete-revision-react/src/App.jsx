// import React,{useState} from "react";



// function App(){

//   const[coubt,setcount]=useState(0);

//   const btn={padding:"6px 12px",margin:"5px"
//     ,fontsize:"30px"
//   }

//   const increase=()=>{
//     setcount(count+1)}


//   const decrease=()=>{
//     setcount(count-1)}


//   const reset=()=>{
//     setcount(0)
//   }



//   return(


//     <div style={{textAlign:"center"}}>

//       <h2>count:{count}</h2>

//       <button style={btn} onClick={increase}>+</button>

//       <button style={btn} onClick={decrease}>-</button>

//       <button style={btn} onClick={reset}>reset</button>

//     </div>
//   );

// }


// export default App;



// import React from "react";
// import Greet from "./components/Greet";

// function App(){

//   return(
//     <div>

//       <Greet name="liv"/>
//       <Greet name="shosusa"/>
//     </div>
//   );




// }

// export default App;



import React from "react";

function  App(){

  const islogged=true;
  // if (islogged){
  //   return <h1>welcome user</h1>;

  // }else{


  //   return <h2>please login</h2>

  // };

  return(
    <div>
      {islogged ?<h1>welcome user</h1> : <h1>please login</h1>}
    </div>
  );




}