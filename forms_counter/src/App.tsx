import './App.css'

const App = () => {
  return (
    <>
      <h1>Counter</h1>
      <p style={{fontSize: '20px'}}>Counter is 55</p>
      <div style={{display: 'flex', gap: '10px', margin: '20px 0'}}>
        <button onClick={()=> {}}>Increase</button>
        <button onClick={()=> {}}>Decrease</button>
        <button onClick={()=> {}}>Reset</button>
      </div>
      <div style={{margin: '20px 0', display: 'flex', gap: '10px'}}>
        <input 
        style={{padding: '15px', border: '1px solid white', borderRadius: '10px', width: '100px'}}
        type='text' 
        onChange={()=> {}}/>
        <button onClick={()=> {}}>Set to 0</button>
      </div>
    </>
  )
}

export default App