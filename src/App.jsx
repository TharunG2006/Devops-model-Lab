import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
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
