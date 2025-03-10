import React from "react";
import { Logs } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="border-b border-gray-300 shadow-md">
      <div className="flex items-center justify-between w-8/12 mx-auto ">
        <div className="flex items-center space-x-2 border-l border-r border-gray-200 px-4">
          <Logs />
          <p>All Categories</p>
          <ChevronDown />
        </div>

        <div className="flex items-center space-x-8">
            <p className="hover:text-orange-500 duration-300 cursor-pointer">Home</p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">Shop</p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">About</p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">Contact</p>
           


        </div>



        <div className="hover:bg-black hover:text-white px-10 py-4 duration-500 cursor-pointer border-l border-r border-gray-200">
          <p className="text-sm font-semibold text-orange-500 ">BLACK FRIDAY</p>
          <p className="text-xs text-center">Get 45% off</p>
        </div>
      </div>
    </div>
  );
}
