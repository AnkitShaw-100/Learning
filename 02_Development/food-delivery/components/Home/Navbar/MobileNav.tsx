import { NavLinks } from '@/constant/constant'
import React from 'react'
import Link from 'next/link';
import { CgClose } from "react-icons/cg";

type Props ={
  showNavbar : boolean;
  closeNavbar: () => void;
}

const MobileNav = ({closeNavbar, showNavbar}:Props) => {
  
  const navbarOpen = showNavbar?"translate-x-0":"translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navbarOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>

      {/* Navlinks */}
      <div className={`text-white ${navbarOpen} fixed justify-center flex flex-col h-full transform transition-al duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050]`}>
        {
          NavLinks.map((link) =>{
            return <Link key={link.id} href={link.url}>
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                {link.label}
              </p>
            </Link>
          })
        }
        {/* Close icon */}
        <CgClose 
        onClick={closeNavbar}
        className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"/>
      </div>
    </div>
  )
}

export default MobileNav
