import  {useState} from 'react'


const Counter =()=> {
    //count=0
    const[count,setcount]=useState(0)
  
    
        function addhandler(){
            setcount(count+1)
            console.log(count)
        }

        function minushandler(){
            setcount(count-1)
            console.log(count)
        }

        function resethandler(){
            setcount(0)
            console.log(count)
        }

return(
        <div>
        <p>counter</p>
        <div>
            <h1>{count}</h1>
            <button onClick={addhandler}>+</button>
            <button onClick={resethandler}>reset</button>
            <button onClick={minushandler}>-</button>
        </div>
    </div>
  )
}



export default Counter