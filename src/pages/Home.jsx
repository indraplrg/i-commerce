import React, { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import { Footer, Main } from "../components/fragments/Card";
import { getListGames } from "../services/apiServices";

const Home = () => {
   const [games, setGames] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const listGames = await getListGames();
            setGames(listGames);
            console.log(listGames);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();
   }, []);

   return (
      <div>
         <Navbar />
         <div className="p-4 h-screen flex flex-wrap gap-4">
            {games &&
               games.map((data) => {
                  return (
                     <div
                        className="max-w-56 shadow-md rounded-lg overflow-hidden h-fit ml-2 cursor-pointer"
                        key={data.id}
                     >
                        <Main img={data.background_image} />
                        <Footer released={data.released} title={data.name} />
                     </div>
                  );
               })}
         </div>
      </div>
   );
};

export default Home;
