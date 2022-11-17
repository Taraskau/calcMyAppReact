
import React from 'react'

import { useState } from 'react';
import './App.css'

const App = () => {

   const [result,setResult] = useState('')

   const handleClick =(e)=>{
    setResult(result.concat(e.target.name));
   }
   
   const clear = (e) => {
    setResult("");
   }
   
   const backspace =(e)=>{
    setResult (result.slice(0, -1));
   }

   const equallaze = () => {
      setResult (eval(result));
   }

    return(
    <div className = 'container'>
         <form className='input'>
            <input  type="text" value={result}/>
            
         </form>
      <div className='buttons'>
      <button onClick={clear} id='clear'>Clear</button>
      <button onClick={backspace} id='backspace'>C</button>  

   <button onClick={handleClick} name="+" id='plus'>+</button>
   <button onClick={handleClick} name='9' >9</button>
   <button onClick={handleClick} name='8'>8</button>
   <button onClick={handleClick} name='7'>7</button>
   <button onClick={handleClick} name='6'>6</button>
   <button onClick={handleClick} name='5'>5</button>
   <button onClick={handleClick} name='4'>4</button>
   <button onClick={handleClick} name='3'>3</button>
   <button onClick={handleClick} name='2'>2</button>
   <button onClick={handleClick} name='1'>1</button>
   <button onClick={handleClick} name='-' id='minus'>-</button>
   <button onClick={handleClick} name='/'>/</button>
   <button onClick={handleClick} name='*'>*</button>

   <button onClick={equallaze} id='equal'>=</button>
           
    </div>
    </div>
    )
}


export default App;
