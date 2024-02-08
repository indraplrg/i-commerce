import { Link } from "react-router-dom";
import Input from "../elements/Input/input";
import Button from "../elements/Button";
import Label from "../elements/Label/Index";

export const HeaderAuth = (props) => {
   const { header, children } = props;
   return (
      <div className="bg-slate-600 w-fit p-8 flex flex-col gap-7 rounded-sm">
         <h1 className="text-2xl text-white font-semibold text-center">
            {header}
         </h1>
         <div className="flex flex-col gap-5">
            {children}
            <Button style="bg-white text-slate-700">{header}</Button>
            <span className="text-white text-[11px] text-center">
               {header == "Login" ? (
                  <>
                     Don't have an account?{" "}
                     <Link to={"/register"} className="text-sky-400">
                        Register
                     </Link>
                  </>
               ) : (
                  <>
                     Already have an account?{" "}
                     <Link to={"/login"} className="text-sky-400">
                        Login
                     </Link>
                  </>
               )}
            </span>
         </div>
      </div>
   );
};

export const MainAuth = (props) => {
   const { title, type } = props;
   return (
      <div className="flex flex-col gap-1 border-b-2 text-white">
         <Label title={title} />
         <Input placeholder={`Type Your ${title}`} id={title} type={type} />
      </div>
   );
};
