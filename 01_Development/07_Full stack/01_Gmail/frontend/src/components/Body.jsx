import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Body = ({ refreshKey, onEmailSent }) => {
    return (
        <div className='flex'>
            <Sidebar onEmailSent={onEmailSent} />
            {/* Outlet me Inbox ko refreshKey prop pass karne ke liye clone karenge */}
            <Outlet context={{ refreshKey }} />
        </div>
    )
}

export default Body