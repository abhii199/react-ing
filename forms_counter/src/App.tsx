import { useState } from 'react'
import './App.css'

const App = () => {

  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState(0)

  const increase = () => {
    setCounter(prev => prev + 1)
  }
  const decrease = () => {
    if(counter > 0){
      setCounter(prev => prev - 1)
    }
  }
  const reset = () => {
    setCounter(prev => 0)
  }
  const setTo = () => {
    setCounter(prev => input)
    setInput(prev => 0)
  }

  return (
    <>
      <h1>Counter</h1>
      <p style={{fontSize: '20px'}}>Counter is {counter}</p>

      <div style={{display: 'flex', gap: '10px', margin: '20px 0'}}>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{margin: '20px 0', display: 'flex', gap: '10px'}}>
        <input 
        value={input}
        style={{padding: '15px', border: '1px solid white', borderRadius: '10px', width: '100px'}}
        type='Number' 
        onChange={(e)=> {
          setInput(Math.max(Number(e.target.value), 0))
        }}/>
        
        <button onClick={setTo}>Set to {input}</button>
      </div>
    </>
  )
}

export default App