import React from 'react'
import { useState } from 'react'

const UseStateCounter = () => {
    const [sayac, setSayac] = useState(0)
    const handleInc= ()=> {
        // sayac++
        setSayac(sayac+1)
        console.log(sayac)
    }
  return (
    <div>
        <h3>Use State Counter</h3>
        <h2>Count:{sayac}</h2>
        <button onClick={handleInc}>INC</button>
        <button onClick={() => setSayac(0)}>CLR</button>
        <button onClick={()=> setSayac(sayac - 1)}>DEC</button> 
    </div>
  )
}

export default UseStateCounter