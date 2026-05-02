// import { useState } from "react";

// function App(){
//   const[para,setPara]=useState("welcome to javascript")
  
  
  
  
//   function clickHandler(){
    
//     if(para ==="welcome to javascript")
//       {setPara("welcome to feel the magic of react js")

//     }else{
//         setPara("welcome to javascript")
      
//       }
//     }

//   return(
//     <div>
//       <p>{para}</p>
//       <button onClick={clickHandler}>click me please</button>


//     </div>
//   );

// }


// export default App 


// // import { useState } from "react";

// // function App() {
// //   // 1. State must be inside the component
// //   const [para, setPara] = useState("welcome to javascript");

// //   // 2. Functions that use that state must also be inside
// //   function clickHandler() {
// //     if (para === "welcome to javascript") {
// //       setPara("welcome to feel the magic of react js");
// //     } else {
// //       setPara("welcome to javascript");
// //     }
// //   }

// //   // 3. The return UI must be inside
// //   return (
// //     <div>
// //       <p>{para}</p>
// //       <button onClick={clickHandler}>click me please</button>
// //     </div>
// //   );
// // }

// // export default App; // Don't forget to export it!



//=====================================================
// example from gemi
//challenge1

// import UserCard  from "./components/UserCard";


// function App(){

//   return(
//     <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
//       <h1>My STUDENTS DATA</h1>
      
//         <UserCard userName="Ajit" hobby="invention"/>
//         <UserCard userName="adhi" hobby="project making"/>
//         <UserCard userName="Ajit" hobby="studying"/>
      


//     </div>
//   )

// }


// export default App

// challenge2


// learning if else in react

// function App(){
//   const islogged=true;
//   if(islogged){
//     return <h1> you logged in succesfully.</h1>

//   }else{
    
//     return <h1>sorry some error occured</h1>;
//   }


// }


// export default App


// now doing the same thing using ternary operator


// function App(){
//   const islogged=false;
  
  
//   return(

//     <div>
//       {islogged? <h1>welcome you have logged</h1>:<h1>some thing happed please try again</h1>}
//     </div>
//   )


// }


// export default App