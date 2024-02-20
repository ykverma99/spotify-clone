/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import useUser from "../hooks/useUser";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [status, setstatus] = useState("typing");
  const [error, setError] = useState("");
  const { login } = useUser();
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const registerOrUpdateUser = async () => {
      if (isAuthenticated) {
        try {
          const res = await axios.post("http://localhost:8080/login", {
            email: user.email,
            password: user.sub,
            authOUserId: user.sub,
          });
          const data = res.data;
          if (res.status == 200) {
            login(data.data);
          }
        } catch (error) {
          console.log(error.response);
          setError(error.response.data.error);
        }
      }
    };
    registerOrUpdateUser();
  }, [isAuthenticated, user, login]);

  function handleInput(e) {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const handleForm = async (e) => {
    e.preventDefault();
    setstatus("processing");
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email: details.email,
        password: details.password,
        authOUserId: "",
      });
      const data = res.data;
      if (res.status == 200) {
        setstatus("success");
        login(data.data);
        setDetails({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setError(error.response.data.error);
      console.log(error);
      setstatus("failed");
    }
  };
  const handleGoogleAuth = () => {
    loginWithPopup({ screen_hint: "signup", connection: "google-oauth2" });
  };
  const handleFacebookAuth = () => {
    loginWithPopup({ screen_hint: "signup", connection: "facebook" });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-700 text-white">
      <div className="flex h-[90vh] w-1/3 flex-col justify-center space-y-10 rounded-lg bg-zinc-800 shadow">
        <h1 className="text-center text-5xl font-bold">Log in to Spotify</h1>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleGoogleAuth}
            varient="outline"
            className="w-96"
            leftIcon={<FcGoogle />}
          >
            Continue with Google
          </Button>
          <Button
            onClick={handleFacebookAuth}
            varient="outline"
            className="w-96"
            leftIcon={<BiLogoFacebookCircle color="#1778F2" />}
          >
            Continue with Facebook
          </Button>
          <Button
            varient="outline"
            className="w-96"
            // onClick={() => logout()}
            // leftIcon={<BiLogoFacebookCircle color="#1778F2" />}
          >
            Continue with Phone number
          </Button>
        </div>
        {/* hr tag */}
        <div className="flex items-center justify-center gap-2 ">
          <hr className="h-px w-60 border-0 bg-gray-600" />
          <p className="text-gray-400">or</p>
          <hr className="h-px w-60 border-0 bg-gray-600" />
        </div>
        <form
          onSubmit={handleForm}
          className="flex  flex-col items-center gap-4 space-y-3"
        >
          <Input
            label={"Email or username"}
            labelFor={"email"}
            placeholder={"Email or username"}
            onChange={handleInput}
          />
          <Input
            label={"Password"}
            labelFor={"password"}
            placeholder={"Password"}
            text={"password"}
            onChange={handleInput}
          />
          {error && <small className="text-red-500">{error}</small>}
          {status === "processing" ? (
            <Button
              leftIcon={<CgSpinnerTwo size={25} className="animate-spin" />}
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
        </form>
        {/* hr tag */}
        <div className="flex justify-center ">
          <hr className="h-px w-[35rem] border-0 bg-gray-600" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-400">Don't have an account?</p>
          <Link
            to={"/signup"}
            className="underline underline-offset-2 hover:text-green-500"
          >
            Sign up for Spotify.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
