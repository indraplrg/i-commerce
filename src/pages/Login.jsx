import { HeaderAuth, MainAuth } from "../components/layouts/Auth";

const Login = () => {
   return (
      <div className="h-screen flex justify-center items-center">
         <HeaderAuth header="Login">
            <MainAuth title="Username" type="text" />
            <MainAuth title="Password" type="password" />
         </HeaderAuth>
      </div>
   );
};

export default Login;
