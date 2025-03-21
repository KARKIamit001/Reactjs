import React from "react";

export default function MyBottomNavbar() {
  return (
    <div className="flex text-center justify-between mr-auto py-10 bg-gray-100 shadow-1xl">
      <div className="font-bold text-5xl px-60">foesta.</div>
      <div className="flex gap-8 pr-40 opacity-70">
        <p>Home</p>
        <p>Demos</p>
        <p>Templates</p>
        <p>Docs</p>
        <p>Support</p>
      </div>
      <div className="pr-40 flex w-100">
        <p className=" border 1px black px-10 py-4 rounded-4xl bg-black text-white hover:bg-white hover:text-black font-bold">Purchase Now</p>
      </div>
    </div>
  );
}
