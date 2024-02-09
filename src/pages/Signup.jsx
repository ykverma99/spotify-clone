/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

const Signup = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    birth: "",
  });
  const [status, setstatus] = useState("typing");
  function handleInput(e) {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const handleForm = async (e) => {
    e.preventDefault();
    setstatus("processing");
    console.log(details);
    setstatus("sucess");
  };
  return (
    <div className="flex h-fit items-center justify-center bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-700 p-10 text-white">
      <div className="flex w-1/3 flex-col justify-center space-y-10 rounded-lg bg-zinc-800 p-10 shadow">
        <h1 className="text-center text-5xl font-bold ">
          Sign up to start Listening
        </h1>
        <form
          onSubmit={handleForm}
          className="flex  flex-col items-center gap-4"
        >
          <Input
            onChange={handleInput}
            label={"Email or username"}
            labelFor={"email"}
            placeholder={"Email or username"}
          />
          <Input
            onChange={handleInput}
            label={"Password"}
            labelFor={"password"}
            placeholder={"Password"}
            text={"password"}
          />
          <Input
            onChange={handleInput}
            label={"Name"}
            labelFor={"name"}
            placeholder={"Enter Name"}
          />
          <Input
            onChange={handleInput}
            label={"Date of Birth"}
            labelFor={"birth"}
            placeholder={"Date of Birth"}
            text={"date"}
          />
          {status === "processing" ? (
            <Button
              leftIcon={<LuLoader2 size={25} className="animate-spin" />}
              className="w-96 opacity-70 active:translate-y-0"
              disabled={true}
            >
              {status}...
            </Button>
          ) : (
            <Button className="w-96">Log In</Button>
          )}
          <Button
            as={"a"}
            varient="flat"
            className="underline underline-offset-1"
          >
            Forgot your password?
          </Button>
          <button disabled className="bg-green-500">
            hello
          </button>
        </form>
        {/* hr tag */}
        <div className="flex items-center justify-center gap-2 ">
          <hr className="h-px w-60 border-0 bg-gray-600" />
          <p className="text-gray-400">or</p>
          <hr className="h-px w-60 border-0 bg-gray-600" />
        </div>
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
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-400">Already have an account?</p>
          <Link
            to={"/login"}
            className="underline underline-offset-2 hover:text-green-500"
          >
            Login in here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
