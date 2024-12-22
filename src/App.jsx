import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headers from './Headers'
import Navs from './Navs.jsx'
import About from './About.jsx'

function App() {
 

  return (
    <>
      <div>
          <Headers/>
          <Navs/>
          <About/>
          
      </div>
    </>
  )
}

export default App
