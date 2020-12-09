import React from 'react';
import  { useState } from 'react';
import './Room.css';


function Room() {
  let [isLit, setLit] = useState(true);  
  let [age, setage]= useState(23);
  let [temp, settemp]=useState(72);
  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        The room is: {isLit? "lit" : "dark"}
        <br/>
        Age = {age}
        <br/>
    <button onClick={()=>setLit(!setLit)}> Off</button>
        <button onClick={()=>setLit(!(!setLit))}> On</button>
        <br/>
        <button onClick={()=> {
            console.log("Age updated");
                setage(++age);
                    }}> Update age</button>
        <br/>
        Temperature = {temp}
        <br/> 
        <button onClick={()=>settemp(22)}> Change to celcius</button>  
        <button onClick={()=>settemp(72)}> Change to Farhenite</button> 
        <br/>
        <button onClick={()=>settemp(++temp)}>+</button>
        <button onClick={()=>settemp(--temp)}>-</button>
    </div>
  );
}

export default Room;
