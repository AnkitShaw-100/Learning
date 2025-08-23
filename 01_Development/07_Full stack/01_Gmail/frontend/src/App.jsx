import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Inbox from './components/Inbox';
import Mail from './components/Mail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },

    ]
  }
])

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
      </div>
    </>
  )
}

export default App
