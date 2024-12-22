import React, { useState } from 'react'

function About() {

    const [state,setState]=useState(false);

    const func =()=>{
         setState(true);
    }
  return (
<>
    <button onClick={func}>DISPLAY</button>
    {
      state===true &&
      <div>Display NIraj</div>
    }
    <div>Func</div>
    </>
  )
}

export default About