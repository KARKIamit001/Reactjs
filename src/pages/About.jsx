import React from "react";
import { ChevronRight } from "lucide-react";
import bag from "../../public/bag.png";
import photo from "../../public/couple.png";
import image from "../../public/founder.png";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import designer from "../../public/designer.png"
import advisor from "../../public/advisor.png"
import ceo from "../../public/ceo.png"


export default function About() {
  return (
    <div>
      <div>
        <div>
          <div className="flex items-center  mt-15  bg-gray-100 mx-auto pl-65 py-15 space-x-4">
            <p className="font-semibold opacity-70 cursor-pointer">Home</p>
            <ChevronRight size={15} className="mt-1" />
            <p className="font-semibold opacity-70">About us</p>
          </div>

          <div className=" flex pl-50 mx-auto mt-30 space-x-20 items-start">
            <div className=" space-y-10">
              <div className="text-blue-500 cursor:text text-sm font-bold">
                OUR HISTORY
              </div>
              <div className="text-4xl font-bold">
                Creative and renovate fashion <br /> trends
              </div>
              <div className="text-sm opacity-80 font-semibold">
                Collaboratively administrate empowered markets via plug-and-play
                maintain <br /> networks. Dynamically usable procrastinate B2B
                users after installed base <br /> benefits. Dramatically
                visualize customer directed convergence without <br />{" "}
                revolutionary ROI.
              </div>

              <div className="flex space-x-8">
                <div className="mb-50">
                  <p className="text-5xl text-blue-500 font-semibold">12</p>
                  <p className="opacity-70">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl text-blue-500 font-semibold">20k</p>
                  <p className="opacity-70">Happy Customers</p>
                </div>
                <div>
                  <p className="text-5xl text-blue-500 font-semibold">100%</p>
                  <p className="opacity-70">Clients Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="pl-20 ">
              <img src={bag} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-20">
          <div className="w-9/12 mx-auto flex space-x-20">
            <img src={photo} alt="" />
            <div className="space-y-15 ">
              <div className="space-y-6">
                <p className="text-blue-500 cursor:text text-sm font-bold">
                  Our vision
                </p>
                <p className="text-4xl font-bold">We are marketpress</p>
                <p className="text-sm opacity-80 font-semibold">
                  Dynamically procrastinate B2C users after installed base
                  benefits. Dramatically visualize <br /> customer directed
                  convergence without revolutionary ROI.
                </p>
              </div>

              <div className="space-y-2 text-sm font-semibold pl-5">
                <p>Credibly innovate granular internal</p>
                <p>Grantedly underconstructions reloaded</p>
                <p>Interactively procrastinate high-payoff</p>
                <p>Completely synergize resource taxing relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto mt-15 text-5xl font-bold">
     <span className="text-blue-500 font-bold text-sm"> ANGELS</span> <br />
      Meet with our Team
      </div>
      <div className="group grid grid-cols-4  w-9/12 mx-auto ">
        <div className="mt-10 relative ">
          <img className="  hover:bg-gray-500  " src={image} alt=""  />
          <div className="absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-8">FOUNDER</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10  grid relative ">
          <img className="  hover:bg-gray-500" src={designer} alt="" />
          <div className=" absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-8">Designer</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10 relative grid ">
          <img className="  hover:bg-gray-500" src={advisor} alt="" />
          <div className=" absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-8">Advisor</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10 relative grid ">
          <img className="  hover:bg-gray-500" src={ceo} alt="" />
          <div className=" absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className="  mx-auto">
            <p className="text-blue-500 font-bold items-center ml-14">Ceo</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10 relative  grid ">
          <img className=" hover:bg-gray-500" src={ceo} alt="" />
          <div className=" absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-14">Ceo</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10 relative grid ">
          <img className="  hover:bg-gray-500" src={advisor} alt="" />
          <div className=" absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-8">Advisor</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10 relative grid ">
          <img className="  hover:bg-gray-500" src={designer} alt="" />
          <div className="absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100 ">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-8">Designer</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>

        <div className="mt-10 relative grid ">
          <img className="  hover:bg-gray-500" src={image} alt="" />
          <div className="absolute top-1/2 pl-25 flex space-x-2 opacity-0 group-hover:opacity-100">
            <p>
              {" "}
              <Facebook />
            </p>
            <p>
              {" "}
              <Twitter />
            </p>
            <p>
              {" "}
              <Instagram />
            </p>
          </div>

          <div className=" items-center mx-auto">
            <p className="text-blue-500 font-bold ml-8">FOUNDER</p>
            <p className="text-xl font-bold mr-8">Tony Williamson</p>
          </div>
        </div>
      </div>

     <div className="bg-gray-100">
     <div className="flex w-8/12 mx-auto mt-20 py-15 space-x-50 items-center">
        <p className=" text-2xl font-bold">Newsletter & Get Updates <br />
       <span className="text-sm opacity-70"> Sign up for our newsletter to get up-to-date from us</span></p>
        <p>
         <input type="text" placeholder="Enter your mail here...." className="border outline-none border-gray-300 pr-40 py-3 items-start"/>
        <button className="border border-gray-300 bg-blue-500 text-white font-semibold py-3 px-6">SUBMIT</button>
        </p>
      </div>
     </div>
    </div>
  );
}
