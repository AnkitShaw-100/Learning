import React, { useState } from 'react'

const App = () => {
  const [light, dark] = useState();

  const changeTheme = () => {
    if (light) {
      dark();
    }
  }
  return (
    <div>
      <label htmlFor="theme">Theme</label>
      <input type="checkbox" name="toggle" />
    </div>
  )
}

export default App
