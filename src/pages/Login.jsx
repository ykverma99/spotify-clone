/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-700 text-white">
      <div className="flex h-[90vh] w-1/3 flex-col justify-center space-y-10 rounded-lg bg-zinc-800 shadow">
        <h1 className="text-center text-5xl font-bold">Log in to Spotify</h1>
        <div className="flex flex-col items-center gap-4">
          <Button varient="outline" className="w-96" leftIcon={<FcGoogle />}>
            Continue with Google
          </Button>{" "}
          <Button
            varient="outline"
            className="w-96"
            leftIcon={<BiLogoFacebookCircle color="#1778F2" />}
          >
            Continue with Facebook
          </Button>
          <Button
            varient="outline"
            className="w-96"
            // leftIcon={<BiLogoFacebookCircle color="#1778F2" />}
          >
            Continue with Phone number
          </Button>
        </div>
        {/* hr tag */}
        <div className="flex justify-center ">
          <hr className="h-px w-[35rem] border-0 bg-gray-600" />
        </div>{" "}
        <form className="flex  flex-col items-center gap-4 space-y-3">
          <Input
            label={"Email or username"}
            labelFor={"email"}
            placeholder={"Email or username"}
          />
          <Input
            label={"Password"}
            labelFor={"password"}
            placeholder={"Password"}
            text={"password"}
          />
          <Button className="w-96">Log In</Button>
          <Button
            as={"a"}
            varient="flat"
            className="underline underline-offset-1"
          >
            Forgot your password?
          </Button>
        </form>
        {/* hr tag */}
        <div className="flex justify-center ">
          <hr className="h-px w-[35rem] border-0 bg-gray-600" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-400">Don't have an account?</p>
          <Link to={"/signup"} className="underline underline-offset-2">
            Sign up for Spotify
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
