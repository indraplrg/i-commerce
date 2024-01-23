import { MagnifyingGlass } from "@phosphor-icons/react";
import Input from "./input";

const InputBar = () => {
   return (
      <div className="w-full border border-slate-400 rounded-md flex">
         <Input />
         <button type="submit" className="px-2 text-slate-400">
            <MagnifyingGlass size={30} />
         </button>
      </div>
   );
};

export default InputBar;
