import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Body = () => {
    return (
        <div className='flex'>
            <Sidebar />
            {/* Outlet ek placeholder hai, yahan par routes ke hisaab se alag alag page ka content dikhata hai. Jaise agar /inbox par ho to Inbox component yahin render hoga. */}
            <Outlet />
        </div>
    )
}

export default Body