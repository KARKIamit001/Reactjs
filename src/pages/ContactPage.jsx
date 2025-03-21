import React from "react";
import { HeartHandshake } from "lucide-react";
import { ArrowUpRight } from 'lucide-react';


export default function ContactPage() {
  return (
    <div>
      <div className="mt-10 w-10/12 border-b  border-gray-300 flex justify-between mx-auto">
        <p className="text-xl font-bold mb-2">mattered</p>
        <div className="flex space-x-12 font-semibold opacity-70">
          <p>Services</p>
          <p>Work</p>
          <p>Insights</p>
          <p>Contact</p>
        </div>
      </div>

      <div>
        <div className="text-4xl font-semibold w-8/12 mx-auto mt-20">
          <p>
            Love to hear from you,{" "}
            <span className="flex ">
              {" "}
              Get in touch <HeartHandshake size={55} />{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      {/* <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Name</label>
          <input type="text" placeholder='eg.Nice T-shirt' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div> */}

      <div className="flex w-8/12 mx-auto space-x-40 mt-20 ">
        <div className="flex flex-col ">
          <label htmlFor="" className="text-lg font-semibold mr-60">
            Your name
          </label>
          <input
            type="text"
            placeholder="Edward Snowden"
            className="border border-gray-300 py-1 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-lg font-semibold mr-60">
            Your email
          </label>
          <input
            type="text"
            placeholder="itanexample@gmail.com"
            className="border border-gray-300 py-1 px-2"
          />
        </div>
      </div>

      <div className="flex w-8/12 mx-auto space-x-40 mt-5">
        <div className="  flex flex-col">
          <label htmlFor="" className="text-lg font-semibold">
            What you are interested
          </label>
          <input
            type="text"
            placeholder="Design & Branding"
            className="border border-gray-300   py-1 px-2 pr-35"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="" className="text-lg font-semibold">
            Project Budget
          </label>
          <input
            type="text"
            placeholder="Select your budget"
            className="border border-gray-300 py-1 px-2 pr-35"
          />
        </div>
      </div>

      <div className="ml-63 mr-110 mx-auto flex flex-col mt-10">
        <label htmlFor="" className="font-semibold">
          Message
        </label>
        <input
          type="text"
          placeholder="Let tell us know your project about"
          className="border border-gray-300 pb-20"
        />
      </div>

      <div className="w-8/12 mx-auto mt-10">
        <button className="border border-hidden bg-black text-white px-30 py-2 text-sm opacity-80 flex">
          Just Send <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
}
