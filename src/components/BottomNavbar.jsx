import React from "react";
import { Logs } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AlignJustify } from 'lucide-react';

export default function BottomNavbar() {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


  return (
    <div className="border-b border-gray-300 shadow-md">
      <div className="flex items-center justify-between w-11/12 md:w-8/12 mx-auto py-4 md:py-0">
        <div className="flex items-center space-x-2 border-l border-r border-gray-200 px-4">
          <Logs />
          <p>All Categories</p>
          <ChevronDown />
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="hover:text-orange-500 duration-300 cursor-pointer">Home</NavLink>
            <NavLink to="/about" className="hover:text-orange-500 duration-300 cursor-pointer">About</NavLink>
            <NavLink to="/dashboard" className="hover:text-orange-500 duration-300 cursor-pointer">Dashboard</NavLink>
            <NavLink to="/contact" className="hover:text-orange-500 duration-300 cursor-pointer">Contact</NavLink>
            <NavLink to="/login" className="hover:text-orange-500 duration-300 cursor-pointer">Login</NavLink>
          <div/> 


        </div>
        </div>

        



        <div className="hidden md:block  hover:bg-black hover:text-white px-10 py-4 duration-500 cursor-pointer border-l border-r border-gray-200">
          <p className="text-sm font-semibold text-orange-500 ">BLACK FRIDAY</p>
          <p className="text-xs text-center">Get 45% off</p>
        </div>

        <div className="block md:hidden">
            <button onClick={toggleDrawer}>
            <AlignJustify />
              
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </div>



      </div>
    </div>
  );
}
