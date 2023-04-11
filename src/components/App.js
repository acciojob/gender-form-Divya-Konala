
import React, { useState } from "react";
import './../styles/App.css';
import Male from "./Male";
import Female from "./Female";

const App = () => {
  const [gender,setGender]=useState('male');
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Select your gender:</h2>
        <input onClick={()=>setGender('male')} type='radio' name='gender' id='male' defaultChecked/><label>Male</label>
        <input onClick={()=>setGender('female')} type='radio' name='gender' id='female'/><label>Female</label>
        {
          (gender=='male')
          ?<Male/>
          :<Female/>
        }
    </div>
  )
}

export default App
