import React from "react";
import { X } from 'lucide-react';


export default function Mytop2() {
  return (
    <div>
      <div className="flex justify-between items-center w-10/12 mx-auto py-10">
        <div className="flex items-center">
         
         
         
          <p className="text-gray-500 text-4xl font-bold flex items-center"><span> <X size={60} /></span>xspeedstudio</p>
        </div>
        <div className="flex items-start space-x-8 font-semibold text-lg">
          <p className="text-blue-500 cursor-pointer">Home</p>
          <p className=" hover:text-blue-500 cursor-pointer">Products</p>
          <p className=" hover:text-blue-500 cursor-pointer">About</p>
          <p className=" hover:text-blue-500 cursor-pointer">Blog</p>
          <p className=" hover:text-blue-500 cursor-pointer">Support</p>
          <p className=" hover:text-blue-500 cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  );
}
