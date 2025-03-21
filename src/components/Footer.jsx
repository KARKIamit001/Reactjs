import React from "react";
import { MapPin } from "lucide-react";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <div className=" flex items-start justify-between w-10/12 mx-auto py-20">
        <div className="space-y-4">
          {/* FIRSTCHILD */}

          <p className=" text-3xl opacity-50">Got Question? Call us 24/7</p>
          <p className="font-semibold text-3xl">[80] 1017 197</p>
          <p className=" text-lg italic opacity-70">
            17 Princess Road, London, Greater London <br />
            NW1 8JR, UK
          </p>
          <button className=" bg-orange-500 text-white px-12 py-4 hover:bg-green-500 duration-500 cursor-pointer font-semibold rounded-xl flex items-center gap-2">
          {" "}
            <MapPin size={18} /> <span>View On Map</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* SECOND CHILD */}
          <p className="opacity-60 text-2xl ">We Using</p>
          <p className="text-2xl font-semibold">Safe Payments</p>
          <p className=" text-lg font-semibold">Secured by:</p>
        </div>

        <div className="space-y-4">
          {/* THIRD CHILD */}
          <p className="text-2xl font-semibold">Quick Links</p>
          <p className="text-lg opacity-70">Support Center</p>
          <p className="text-lg opacity-70">Term & Conditions</p>
          <p className="text-lg opacity-70">Shipping</p>
          <p className="text-lg opacity-70">Privacy Policy</p>
          <p className="text-lg opacity-70">Help</p>
          <p className="text-lg opacity-70">Products Return</p>
          <p className="text-lg opacity-70">FAQS</p>
        </div>

        <div className="space-y-4">
          {/* FOURTHCHILD */}
          <p className="text-2xl font-semibold">Our Stores</p>
          <p className="text-lg opacity-70">New York</p>
          <p className="text-lg opacity-70">London SF</p>
          <p className="text-lg opacity-70">Cockfosters BP</p>
          <p className="text-lg opacity-70">Los Angeles</p>
          <p className="text-lg opacity-70">Chicago</p>
          <p className="text-lg opacity-70">Las Vegas</p>
          <p className="text-lg opacity-70">Albarto</p>
        </div>

        <div className="-rotate-90 mt-40">
          {/* FIFTHCHILD */}
          <button className=" bg-orange-500 text-white px-12 py-4 hover:bg-green-500 duration-500 cursor-pointer font-semibold rounded-xl flex items-center gap-2">
            {" "}
            <span>BACK TOP</span> <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}
