import { useEffect, useState } from "react";

function  ApiCall(){

    const [users,setusers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())

        .then((data)=>setusers(data));
    
    },[]);


    return(
        <div>
            <h1>user list</h1>


            {users.map((user)=>(

                <p key ={user.id}>{user.name}</p>
            ))}
        </div>
    );


}



export default ApiCall;