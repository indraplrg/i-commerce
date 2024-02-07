export const Main = (props) => {
   const { img } = props;
   return (
      <div className="max-h-40 hover:brightness-75 transition-all ease-linear">
         <img src={img} />
      </div>
   );
};

export const Footer = (props) => {
   const { price, title } = props;
   return (
      <div className="backdrop-blur-[1px] text-white">
         <h1 className="font-semibold text-lg px-2">
            {title.charAt(0).toUpperCase() + title.slice(1)}
         </h1>
         <h3 className="text-sm px-2">Rp{price}</h3>
         <div className="flex justify-around mt-2 py-1">
            <button>Beli</button>
            <button className="flex items-center">Add To Cart</button>
         </div>
      </div>
   );
};
