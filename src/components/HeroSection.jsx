import React from "react";
import myImage from "../../public/sofa2.jpg";

export default function HeroSection() {
  return (
    <div>
      <div>
        <img
          className="relative h-[80vh] w-full object-cover"
          src={myImage}
          alt="this-hero-section-image"
        />

        <div className="absolute top-96 left-[40vw] space-y-6">
          <p className="font-semibold text-orange-500 text-2xl">Get 40% off</p>
          <p className="text-5xl text- white font-semibold">
            Get your amazing sofa now
          </p>
          <button className="bg-orange-500 py-4 px-12 text-white hover:bg-orange-700 duration-300 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
