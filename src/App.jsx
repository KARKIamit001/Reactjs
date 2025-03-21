import React from "react";
import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import MyTopNavbar from "./components/MyTopNavbar";
import MyBottomNavbar from "./components/MyBottomNavbar";
import Footer from "./components/footer";
import Myfooter from "./components/Myfooter";
import HeroSection from "./components/Herosection";
import NewArrivals from "./components/NewArrivals";
import Mytop from "./components/Mytop";
import Mytop2 from "./components/Mytop2";
import Top3 from "./components/top3";
import Top4 from "./components/Top4";
import PopularProduct from "./components/PopularProduct";


export default function App() {
  return (
    <div>
     
      {/* <MyTopNavbar /> */}
      {/* <MyBottomNavbar /> */}
      <HeroSection/>
      <NewArrivals/>
      <PopularProduct/>
      
      
      {/* <Myfooter /> */}
      {/* <Mytop/> */}
      {/* <Mytop2/> */}
      {/* <Top3/> */}
      {/* <Top4/> */}
      
     
    </div>
  );
}
