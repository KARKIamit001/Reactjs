import React from "react";
import { Dot } from 'lucide-react';

export default function Top3() {
  return (
   <div>

    <div>
    <div className=" flex w-10/12 items-center justify-center mx-auto">
      <div className="text-5xl py-10 ">
        {" "}
        Grow <span className="text-red-500">Your Business</span> Faster Than
        Ever
      </div>
      
    </div>
    </div>

    <div className=" flex w-10/12 items-center justify-center mx-auto">
        <p className="flex text-2xl items-center"><span className="text-red-500"><Dot /></span>ArtificiaI Intelligence</p>
        <p className="flex text-2xl items-center"><span className="text-red-500"><Dot /></span>SaaS</p>
        <p className="flex text-2xl items-center"><span className="text-red-500"><Dot /></span>WordPress</p>
        <p className="flex text-2xl items-center"><span className="text-red-500"><Dot /></span>Mobile Apps</p>
    </div>

   </div>

  

   
  );
}
