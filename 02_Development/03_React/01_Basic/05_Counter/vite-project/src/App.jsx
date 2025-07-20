import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <div className='main'>
        <p className='zero'>{count}</p>
        <div className='buttons'>
          <button onClick={increment} className='button_1'>+</button>
          <button onClick={decrement} className='button_2'>-</button>
        </div>
      </div>
    </div>
  )
}

export default App
