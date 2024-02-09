export const Main = (props) => {
   const { img } = props;
   return (
      <div className="h-40 hover:brightness-75 transition-all ease-linear">
         <img src={img} className="h-full object-cover" />
      </div>
   );
};

export const Footer = (props) => {
   const { released, title } = props;
   return (
      <div className="min-h-32 flex flex-col justify-between backdrop-blur-[1px] text-black">
         <div>
            <h1 className="font-semibold text-lg px-2">
               {title.charAt(0).toUpperCase() + title.slice(1)}
            </h1>
            <h3 className="text-sm px-2">{released}</h3>
         </div>
         <div className="flex justify-around mt-2 py-1">
            <button>Details</button>
            <button className="flex items-center">Watch Trailers</button>
         </div>
      </div>
   );
};
