import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Click to Increment. Count is {count}
        </button>
        
        <button
          type="button"
          className="counter"
          onClick={()=> setCount((count)=>count-1)}
          >Click to decrement. Count is {count}</button>
      </section>
    </>
  )
}

export default App
