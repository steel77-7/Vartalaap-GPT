import React from "react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Home from "../Pages/Home";
import Spinner from "./Spinner";

function Main() {
  const { loggedin, checkingStatus } = useAuthStatus();
  const navigate = useNavigate();

  const renderLogin = () => {
    navigate("/login");
  };

  const renderSignup = () => {
    navigate("/signup");
  };

  if (checkingStatus) {
    return <Spinner />;
  }

  if (loggedin === true && checkingStatus === false) {
    return <Home />;
  }
  return (
    <>
      <main className="h-[100vh] w-[100%] bg-chatblack">
        <div className="text-white flex justify-center items-center flex-col h-[100vh] w-[100%] ">
          <img src={logo} className="w-[5rem]" />
          <h1>Welcome to ChatGPT</h1>
          <h1>Log in with your OpenAI account to continue</h1>
          <div className="flex justify-center items-center mt-4">
            <button
              className="bg-btnColor hover:bg-hoverbtnColor text-white font-semibold py-1.5 px-4 rounded"
              onClick={renderLogin}
            >
              Log in
            </button>
            <button
              className="bg-btnColor hover:bg-hoverbtnColor mx-2 text-white font-semibold py-1.5 px-4 rounded"
              onClick={renderSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
