import { HeaderAuth, MainAuth } from "../components/layouts/Auth";

const Register = () => {
   return (
      <div className="h-screen flex justify-center items-center">
         <HeaderAuth header="Register">
            <MainAuth title="Username" type="text" />
            <MainAuth title="Password" type="password" />
            <MainAuth title="Confirm Password" type="password" />
         </HeaderAuth>
      </div>
   );
};

export default Register;
