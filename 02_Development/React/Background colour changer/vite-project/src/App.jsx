import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setcolour] = useState("grey")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: colour }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-full'>
            <button onClick={() => setcolour("red")} className = "outline-none px-4 py-2 rounded-full text-white font-bold" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setcolour("blue")} className = "outline-none px-4 py-2 rounded-full text-white font-bold" style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={() => setcolour("green")} className = "outline-none px-4 py-2 rounded-full text-white font-bold" style={{backgroundColor:"Green"}}>Green</button>
            <button onClick={() => setcolour("black")} className = "outline-none px-4 py-2 rounded-full text-white font-bold" style={{backgroundColor:"Black"}}>Black</button>
            <button onClick={() => setcolour("orange")} className = "outline-none px-4 py-2 rounded-full text-white font-bold" style={{backgroundColor:"Orange"}}>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
