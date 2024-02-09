export const getListGames = async () => {
   try {
      const response = await fetch(
         "https://api.rawg.io/api/games?key=02ae1b01e01540cd9655f0b47e1fc2f8&page_size=18"
      );
      const data = await response.json();
      const listGames = data.results;
      return listGames;
   } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
   }
};
