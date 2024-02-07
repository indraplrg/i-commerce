import React from "react";
import Navbar from "../components/fragments/Navbar";
import { Footer, Main } from "../components/fragments/Card";
import { games } from "../utils/data";

const Home = () => {
   return (
      <div>
         <Navbar />
         <div className="p-4 h-screen flex flex-wrap gap-4">
            {games.map((item) => {
               return (
                  <div
                     className="max-w-56 shadow-md rounded-lg overflow-hidden h-fit ml-2 cursor-pointer"
                     key={item.id}
                  >
                     <Main img={item.poster} />
                     <Footer price={item.price} title={item.title} />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Home;
