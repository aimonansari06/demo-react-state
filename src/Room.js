import React from 'react';
import  { useState } from 'react';



function Room() {
  let [isLit, setLit] = useState(false);  
  let [age, setage]= useState(23);
  function update()
  {
      console.log("Button Clicked");
      setLit(!isLit);
      
  }
  function updateage()
  {
    console.log("Age updated");
    setage(++age);
  }
  return (
    <div>
        The room is: {isLit?"Lit" : "Dark"}
        <br/>
        Age = {age}
        <br/>
        <button onClick={update}> Toggle light</button>
        <br/>
        <button onClick={updateage}> Update age</button>
    </div>
  );
}

export default Room;
