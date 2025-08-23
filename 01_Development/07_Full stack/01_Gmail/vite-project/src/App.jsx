import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='bg-[#F6F8FC] w-screen h-screen overflow-hidden'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App
