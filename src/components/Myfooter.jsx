import React from "react";
import { ArrowRight } from "lucide-react";

export default function Myfooter() {
  return (
    <div className="py-20">
      <div className="flex w-10/12 justify-between mx-auto">
        <div className="space-y-8">
          <p className="text-2xl font-sans">Contact Info </p>
          <p className="text-xl opacity-80">Find a location nearest you.</p>
          <div>
          <p className="font-bold">Hotline: </p>
            <p className="opacity-80 text-xl"> (+00) 123 - 4568</p>
          </div>
          <div>
            <p className="font-bold">
            Address:</p>
            <p className="opacity-80 text-xl">512 Howard Street #19 San <br />
            Francisco.USA.</p>
          </div>

         
        
        </div>

        <div className="space-y-4">
          <p className="text-2xl font-sans">Quick Links</p>
          <p className="opacity-80">My Account</p>
          <p className="opacity-80">Cart</p>
          <p className="opacity-80">Wishlist</p>
          <p className="opacity-80">Product Compare</p>
        </div>

        <div className="space-y-4">
          <p className="text-2xl font-sans">Information</p>
          <p className="opacity-80">Privacy Policy</p>
          <p className="opacity-80">Refund Policy</p>
          <p className="opacity-80">Shipping & Return</p>
          <p className="opacity-80">Terms & Conditions</p>
        </div>

        <div className="space-y-8">
          <p className="text-2xl font-sans">Let's Get In Touch</p>
          <p>
            Subscribe to our newsletter to receive news <br /> on update.
          </p>
          <div className="">
            
              <button className="flex border 1px border-gray-400 shadow-md px-4 py-3 rounded-sm mx-auto opacity-60 justify-between  w-80 ">
                <p>Enter your email{" "}</p>
               <p> <ArrowRight />{" "}</p>
               
                 
                
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}
