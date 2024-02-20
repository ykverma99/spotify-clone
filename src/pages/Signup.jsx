/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../hooks/useUser";

const Signup = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    birth: "",
  });
  const [status, setstatus] = useState("typing");
  const [error, setError] = useState("");
  const { login } = useUser();
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const registerOrUpdateUser = async () => {
      if (isAuthenticated) {
        try {
          const res = await axios.post("http://localhost:8080/register", {
            email: user.email,
            name: user.name,
            password: user.sub,
            DOB: "",
            authOUserId: user.sub,
          });
          const data = res.data;
          if (res.status == 201) {
            login(data.data);
          }
        } catch (error) {
          console.log(error);
          setError(error.response.data.error);
        }
      }
    };
    registerOrUpdateUser();
  }, [isAuthenticated, user, login]);

  const handleRegisterWithAuth = () => {
    loginWithPopup();
  };

  function handleInput(e) {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const handleForm = async (e) => {
    e.preventDefault();
    setstatus("processing");
    try {
      const res = await axios.post("http://localhost:8080/register", {
        email: details.email,
        name: details.name,
        password: details.password,
        DOB: details.birth,
        authOUserId: "",
      });
      const data = res.data;
      if (res.status == 201) {
        setstatus("success");
        login(data.data);
        setDetails({
          email: "",
          name: "",
          password: "",
          DOB: "",
        });
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setstatus("failed");
    }
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
          {error && <small className="text-red-500">{error}</small>}
          {status === "processing" ? (
            <Button
              leftIcon={<LuLoader2 size={25} className="animate-spin" />}
              className="w-96 opacity-70 active:translate-y-0"
              disabled={true}
            >
              {status}...
            </Button>
          ) : (
            <Button className="w-96">Sign Up</Button>
          )}
          <Button
            as={"a"}
            varient="flat"
            className="underline underline-offset-1"
          >
            Forgot your password?
          </Button>
        </form>
        {/* hr tag */}
        <div className="flex items-center justify-center gap-2 ">
          <hr className="h-px w-60 border-0 bg-gray-600" />
          <p className="text-gray-400">or</p>
          <hr className="h-px w-60 border-0 bg-gray-600" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleRegisterWithAuth}
            varient="outline"
            className="w-96"
            leftIcon={<FcGoogle />}
          >
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
