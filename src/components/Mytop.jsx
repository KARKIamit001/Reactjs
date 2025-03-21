import React from "react";
import { ArrowRight } from "lucide-react";
import { Cpu } from 'lucide-react';

export default function Mytop() {
  return (
    <div className=" bg-lime-500 py-2 cursor-pointer">
      <div className="flex justify-between w-10/12 items-center mx-auto">
        <div className="text-4xl font-bold text-white">Save Big in Ramadan</div>
        <button className="border border-blue-400 bg-cyan-500 text-3xl font-semibold rounded-xl px-2 border-hidden">
          UP <span className="text-3xl font-extrabold ">80%</span>
          <br />
          To <span className="text-2xl font-semibold"> SAVINGS</span>
        </button>
      

        <div className="flex items-center justify-between space-x-4">
            <div className="font-semibold text-white">ENDING IN:</div>
            
            <div> <Cpu size={50}/> </div>

            <div className="items-start space-y-0">
                <p className="text-3xl font-bold text-white space-y-0">10</p>
                <p className="font-semibold text-gray-400 ">DAYS</p>
                </div>

            <div>
            <p className="text-3xl font-bold text-white space-y-0">10</p>
            <p className="font-semibold text-gray-400 ">HOUS</p>
            </div>
            <div>
            <p className="text-3xl font-bold text-white space-y-0">10</p>
            <p className="font-semibold text-gray-400 ">MINS</p>
            </div>
            <div>
            <p className="text-3xl font-bold text-white space-y-0">10</p>
            <p className="font-semibold text-gray-400 ">SECS</p>
            </div>
        </div>

        <button className=" font-semibold rounded-xl bg-yellow-300 my-6 py-2 px-4 border border-gray-300 flex items-center">
            <p>Seize The Deal</p>
            <p> <ArrowRight /></p>
        </button>

        <div />
      </div>
    </div>
  );
}
