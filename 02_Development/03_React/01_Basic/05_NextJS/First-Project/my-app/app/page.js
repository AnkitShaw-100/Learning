"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Head from "@/components/Header"

const page = () => {
  const [name, setName] = useState("Ankit");
  return (
    <>
      <Head />
      <div className="main-container">
        <nav className="navigation">
          <Link href="/About" className="nav-link">About Us</Link>
          <Link href="/Courses" className="nav-link">Courses</Link>
          <Link href="/Product" className="nav-link">Product</Link>
        </nav>

        <div className="content">
          <h1 className="title">My name is {name}</h1>
          <button className="update-btn" onClick={() => { setName("Specturm") }}>Update</button>
        </div>
      </div>
    </>
  )
}

export default page
