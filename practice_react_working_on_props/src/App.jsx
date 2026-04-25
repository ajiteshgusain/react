// import { useState } from "react";

// function App(){
//   const[para,setPara]=useState("welcome to javascript")
  
  
  
  
//   function clickHandler(){
    
//     if(para ==="welcome to javascript")
//       {setPara("welcome to feel the magic of react js")

//       }else{
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
import  SensorData from "./SensorData.jsx";


function App(){
  return(
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>River Robot Sensor Dashboard</h1>
      <hr />

    <div style={{ display: 'flex', gap: '20px' }}>
    <SensorData sensorName="Battery temp" value={32}/>


    {/* Pass a high value (Red) */}
        <SensorData sensorName="Battery Temp" value={68} />

        {/* Pass another low value (Green) */}
        <SensorData sensorName="Water Sensor" value={25} />


    
    </div>
    </div>
  )

}


export default App