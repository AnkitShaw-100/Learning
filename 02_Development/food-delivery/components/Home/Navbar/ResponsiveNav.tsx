"use client"
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import {useState} from 'react';

const ResponsiveNav = () => {
  
  const [showNavbar, setShowNavbar] = useState(false);
  const openNavbarHandler = () => setShowNavbar(true);
  const closeNavbarHandler = () => setShowNavbar(false);

  return (
    <div>
      <Nav openNavbar={openNavbarHandler} />
      <MobileNav showNavbar={showNavbar} closeNavbar={closeNavbarHandler} />
    </div>
  )
}

export default ResponsiveNav
