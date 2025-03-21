import React from "react";

import productImage from "../../public/stool.png";
import { Heart } from "lucide-react";
import photo from "../../public/tool.jpg";
import chair from "../../public/redchair.png";
import furniture from "../../public/white.png";

export default function PopularProduct() {
  return (
    <div>
      <div className="w-10/12 mx-auto ">
        <div>
          <div className="text-3xl font-semibold border-b border-gray-300 mb-12 pb-4 mt-12">
           Popular products
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className=" group border border-gray-300 py-8 px-4 space-y-1 hover:border-orange-300 cursor-pointer hover:shadow-md duration-300">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
              <img src={productImage} alt=""  className="h-52"/>
            </div>
            <p className="font-semibold opacity-70 ">Innovative Furnitures</p>
            <p className="text-2xl font-semibold">Heavy Duty Antis</p>
            <p className="text-orange-500 text-2xl font-semibold">$4,000.00</p>
          </div>

          <div className=" group border border-gray-300 py-8 px-4 space-y-1 hover:border-orange-300 cursor-pointer hover:shadow-md duration-300">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-between">
              <img src={photo} alt=""  className="h-52"/>
            </div>
            <p className="font-semibold opacity-70 ">Innovative Furnitures</p>
            <p className="text-2xl font-semibold">Heavy Duty Anti</p>
            <p className="text-orange-500 text-2xl font-semibold">$2,000.00</p>
          </div>
          <div className="group border-gray-300 border hover:border-orange-500 py-8 px-4 space-y-1 items-center">
            <div className="opacity-0 group-hover:opacity-100 text-orange-500 flex justify-end">
              <Heart />
            </div>
            <div className="flex justify-between">
              <img src={chair} alt=""  className="h-52"/>
            </div>

            <p className="font-semibold opacity-70 ">Innovative Furnitures</p>
            <p className="text-2xl font-semibold">Zinglo Wheel</p>
            <p className="text-orange-500 text-2xl font-semibold">$3,000.00</p>
          </div>

          <div
            className="group border border-gray-300 hover:border-orange-500 justify-between 
                 py-8 px-4"
          >
            <div className="opacity-0 group-hover:opacity-100 text-orange-500 flex justify-end">
              <Heart />
            </div>
            <div>
              <img src={furniture} alt=""  className="h-52"/>
            </div>
            <p className="font-semibold opacity-70">Innovative Furnitures</p>
            <p className="font-semibold text-2xl">Zinglo Wheel</p>
            <p className="text-2xl font-semibold text-orange-500">$5,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
