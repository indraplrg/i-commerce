import { MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Input from "../elements/Input/input";
import Button from "../elements/Button";

const Navbar = () => {
   return (
      <div className="flex bg-slate-800 text-white py-4 px-4">
         <div className="flex flex-[7] justify-around items-center">
            <h2 className="font-semibold text-xl">i-Gamers</h2>
            <div className="hover:bg-gray-300 hover:text-black py-2 px-4 rounded-md transition-all ease-linear cursor-pointer">
               Kategori
            </div>
            <div className="flex-[0.8] w-full border border-slate-400 rounded-md flex px-3">
               <Input placeholder="Enter Some Game" />
               <Button>
                  <MagnifyingGlass size={30} />
               </Button>
            </div>
            <div>
               <ShoppingCartSimple size={30} />
            </div>
         </div>
         <div className="border-y-2 border"></div>
         <ul className="flex-1 flex items-center gap-6 pl-4">
            <li>
               <Link
                  to="/login"
                  className="px-4 py-2 border border-gray-200 rounded-md transition-all ease-linear"
               >
                  Login
               </Link>
            </li>
            <li>
               <Link
                  to="/register"
                  className="px-4 py-2  bg-gray-200 text-slate-700   rounded-md transition-all ease-linear"
               >
                  Register
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
