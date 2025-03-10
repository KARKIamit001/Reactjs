import React from "react";
import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import MyTopNavbar from "./components/MyTopNavbar";
import MyBottomNavbar from "./components/MyBottomNavbar";

export default function App() {
  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
      <MyTopNavbar />
      <MyBottomNavbar />
      this is homepage
    </div>
  );
}
