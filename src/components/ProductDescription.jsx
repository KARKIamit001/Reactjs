import React from "react";
import myimage from "../../public/stool.png";
import { Square } from "lucide-react";
import { Heart } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import photo from "../../public/tool.jpg"
import photored from "../../public/redchair.png"
import photowhite from "../../public/white.png"

export default function ProductDescription() {
  return (
    <div>
      <div className="w-11/12 md:w-10/12 mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div>
          <img src={myimage} alt="" height={500} width={500} />
        </div>

        <div className="space-y-4 ">
          <div className=" text-2xl font-semibold">Heavy Duty Antis</div>
          <div className="font-semibold ">
            <p className="opacity-70">SKU: N/A</p>

            <p className="opacity-70">
              Category:{" "}
              <span className="text-blue-500 opacity-100 hover:text-blue-900 cursor-pointer">
                Innovative Furnitures
              </span>
            </p>
          </div>
          <div className="font-bold opacity-70">About the product</div>
          <div className="font-semibold opacity-70">
            All Exclusive Comes with Marketo them. More power with Extended
            Features. <br /> Multiple niche demos with huge extensive options
          </div>
          <div className="text-orange-500 opacity-90 font-semibold">
            $4,000.00
          </div>
          <div className="flex items-center space-x-6 ml-10">
            <p>Color</p>
            <div className="space-x-2 cursor-pointer">
              <button className=" cursor-pointer border-2 bg-green-500 border-gray-500">
                {" "}
                <Square size={40} />{" "}
              </button>
              <button className=" cursor-pointer border-2 bg-red-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-yellow-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-white border-gray-500">
                {" "}
                <Square size={40} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-10">
            <div>
              <button className="border bg-gray-200 border-gray-300 py-2 px-4 opacity-60 cursor-pointer ">
                +
              </button>
              <button className="border-y border-gray-300 py-2 px-6 cursor-text">
                1
              </button>
              <button className="border  bg-gray-200 border-gray-300 py-2 px-4 cursor-pointer">
                -
              </button>
            </div>
            <div>
              <button className="border bg- font-bold text-white px-8 py-2.5 bg-purple-300 opacity-89 hover:bg-amber-500 duration-500 cursor-not-allowed rounded-md ">
                Add to cart
              </button>
            </div>
          </div>

          <div className="space-x-4 mt-6 flex">
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md text-orange-500 hover:text-green-500 cursor-pointer">
              {" "}
              <Heart size={12} />
            </button>
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md cursor-pointer">
              {" "}
              <ArrowLeftRight size={20} />
            </button>

            {/* 
           
          <div className="flex">
            <button className="border border-gray-300 p-3 bg-gray-5o">+</button>
            <input type="text" className=" border border-gray-300 h-12 outline-none w-20"/>
            <button className="border border-gray-300 p-3 bg-gray-5o">-</button>
          </div>
           */}
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img src={photo} alt="" height={500} width={500} />
        </div>

        <div className="space-y-4 ">
          <div className=" text-2xl font-semibold">Heavy Duty Antis</div>
          <div className="font-semibold ">
            <p className="opacity-70">SKU: N/A</p>

            <p className="opacity-70">
              Category:{" "}
              <span className="text-blue-500 opacity-100 hover:text-blue-900 cursor-pointer">
                Innovative Furnitures
              </span>
            </p>
          </div>
          <div className="font-bold opacity-70">About the product</div>
          <div className="font-semibold opacity-70">
            All Exclusive Comes with Marketo them. More power with Extended
            Features. <br /> Multiple niche demos with huge extensive options
          </div>
          <div className="text-orange-500 opacity-90 font-semibold">
            $2,000.00
          </div>
          <div className="flex items-center space-x-6 ml-10">
            <p>Color</p>
            <div className="space-x-2 cursor-pointer">
              <button className=" cursor-pointer border-2 bg-green-500 border-gray-500">
                {" "}
                <Square size={40} />{" "}
              </button>
              <button className=" cursor-pointer border-2 bg-red-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-yellow-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-white border-gray-500">
                {" "}
                <Square size={40} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-10">
            <div>
              <button className="border bg-gray-200 border-gray-300 py-2 px-4 opacity-60 cursor-pointer ">
                +
              </button>
              <button className="border-y border-gray-300 py-2 px-6 cursor-text">
                1
              </button>
              <button className="border  bg-gray-200 border-gray-300 py-2 px-4 cursor-pointer">
                -
              </button>
            </div>
            <div>
              <button className="border bg- font-bold text-white px-8 py-2.5 bg-purple-300 opacity-89 hover:bg-amber-500 duration-500 cursor-not-allowed rounded-md ">
                Add to cart
              </button>
            </div>
          </div>

          <div className="space-x-4 mt-6 flex">
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md text-orange-500 hover:text-green-500 cursor-pointer">
              {" "}
              <Heart size={12} />
            </button>
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md cursor-pointer">
              {" "}
              <ArrowLeftRight size={20} />
            </button>

            
          </div>
          
        </div>
      </div>


      <div className="w-10/12 mx-auto mt-20 grid grid-cols-2">
        <div>
          <img src={photored} alt="" height={500} width={500} />
        </div>

        <div className="space-y-4 ">
          <div className=" text-2xl font-semibold">Zinglo Wheel</div>
          <div className="font-semibold ">
            <p className="opacity-70">SKU: N/A</p>

            <p className="opacity-70">
              Category:{" "}
              <span className="text-blue-500 opacity-100 hover:text-blue-900 cursor-pointer">
                Innovative Furnitures
              </span>
            </p>
          </div>
          <div className="font-bold opacity-70">About the product</div>
          <div className="font-semibold opacity-70">
            All Exclusive Comes with Marketo them. More power with Extended
            Features. <br /> Multiple niche demos with huge extensive options
          </div>
          <div className="text-orange-500 opacity-90 font-semibold">
            $3,000.00
          </div>
          <div className="flex items-center space-x-6 ml-10">
            <p>Color</p>
            <div className="space-x-2 cursor-pointer">
              <button className=" cursor-pointer border-2 bg-green-500 border-gray-500">
                {" "}
                <Square size={40} />{" "}
              </button>
              <button className=" cursor-pointer border-2 bg-red-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-yellow-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-white border-gray-500">
                {" "}
                <Square size={40} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-10">
            <div>
              <button className="border bg-gray-200 border-gray-300 py-2 px-4 opacity-60 cursor-pointer ">
                +
              </button>
              <button className="border-y border-gray-300 py-2 px-6 cursor-text">
                1
              </button>
              <button className="border  bg-gray-200 border-gray-300 py-2 px-4 cursor-pointer">
                -
              </button>
            </div>
            <div>
              <button className="border bg- font-bold text-white px-8 py-2.5 bg-purple-300 opacity-89 hover:bg-amber-500 duration-500 cursor-not-allowed rounded-md ">
                Add to cart
              </button>
            </div>
          </div>

          <div className="space-x-4 mt-6 flex">
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md text-orange-500 hover:text-green-500 cursor-pointer">
              {" "}
              <Heart size={12} />
            </button>
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md cursor-pointer">
              {" "}
              <ArrowLeftRight size={20} />
            </button>

           
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto mt-20 grid grid-cols-2">
        <div>
          <img src={photowhite} alt="" height={500} width={500} />
        </div>

        <div className="space-y-4 ">
          <div className=" text-2xl font-semibold">Zinglo Wheel</div>
          <div className="font-semibold ">
            <p className="opacity-70">SKU: N/A</p>

            <p className="opacity-70">
              Category:{" "}
              <span className="text-blue-500 opacity-100 hover:text-blue-900 cursor-pointer">
                Innovative Furnitures
              </span>
            </p>
          </div>
          <div className="font-bold opacity-70">About the product</div>
          <div className="font-semibold opacity-70">
            All Exclusive Comes with Marketo them. More power with Extended
            Features. <br /> Multiple niche demos with huge extensive options
          </div>
          <div className="text-orange-500 opacity-90 font-semibold">
            $5,000.00
          </div>
          <div className="flex items-center space-x-6 ml-10">
            <p>Color</p>
            <div className="space-x-2 cursor-pointer">
              <button className=" cursor-pointer border-2 bg-green-500 border-gray-500">
                {" "}
                <Square size={40} />{" "}
              </button>
              <button className=" cursor-pointer border-2 bg-red-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-yellow-500 border-gray-500">
                {" "}
                <Square size={40} />
              </button>
              <button className=" cursor-pointer border-2 bg-white border-gray-500">
                {" "}
                <Square size={40} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-10">
            <div>
              <button className="border bg-gray-200 border-gray-300 py-2 px-4 opacity-60 cursor-pointer ">
                +
              </button>
              <button className="border-y border-gray-300 py-2 px-6 cursor-text">
                1
              </button>
              <button className="border  bg-gray-200 border-gray-300 py-2 px-4 cursor-pointer">
                -
              </button>
            </div>
            <div>
              <button className="border bg- font-bold text-white px-8 py-2.5 bg-purple-300 opacity-89 hover:bg-amber-500 duration-500 cursor-not-allowed rounded-md ">
                Add to cart
              </button>
            </div>
          </div>

          <div className="space-x-4 mt-6 flex">
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md text-orange-500 hover:text-green-500 cursor-pointer">
              {" "}
              <Heart size={12} />
            </button>
            <button className="border border-gray-300 py-2 px-10 opacity-60 rounded-md cursor-pointer">
              {" "}
              <ArrowLeftRight size={20} />
            </button>

            
          </div>
          
        </div>
      </div>

    </div>
  );
}
