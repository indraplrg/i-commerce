import React from "react";
import Navbar from "../components/fragments/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 h-screen">
        <div className="max-w-56 shadow-md rounded-lg overflow-hidden cursor-pointer">
          <div className="max-h-60 hover:brightness-75 transition-all ease-linear">
            <img src="/images/viewfinder.jpg" />
          </div>
          <div className="backdrop-blur-[1px] text-white">
            <h1 className="font-semibold text-lg px-2">View Finder</h1>
            <h3 className="text-sm px-2">Rp20000</h3>
            <div className="flex justify-around mt-2 py-1">
              <button>Beli</button>
              <button className="flex items-center">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
