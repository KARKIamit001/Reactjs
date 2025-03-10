import React from "react";
import { Heart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Sofa } from "lucide-react";
import { Search } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="bg-orange-400 py-6">
      <div className="flex justify-between w-8/12 mx-auto">
        <div className="flex space-x-2 items-center">
          <Sofa size={30} className="text-yellow-300" />
          <p className="text-3xl font-semibold text-white">Marketo.</p>
        </div>

        <div className="flex items-center">
          <input type="text" placeholder="search what you want" className=" h-8 border border-white outline-none bg-white pl-2"/>
          <div className="bg-black hover:bg-green-500 duration-500 cursor-pointer p-2">
            <Search size={15} className="text-white"/>
          </div>
        </div>

        <div className="flex space-x-4 text-white">
          <Heart />
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
}
