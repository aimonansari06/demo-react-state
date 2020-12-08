import React from 'react';
import  { useState } from 'react';
import './Room.css';


function Room() {
  let [isLit, setLit] = useState(false);  
  let [age, setage]= useState(23);
 
  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        The room is: {isLit? "lit" : "dark"}
        <br/>
        Age = {age}
        <br/>
        <button onClick={()=>setLit(!isLit)}> Toggle light</button>
        <br/>
        <button onClick={()=> {
                console.log("Age updated");
                setage(++age);
                    }}> Update age</button>
    </div>
  );
}

export default Room;
