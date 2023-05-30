import React from "react";
import logo from "../Assets/logo.png";

function Main() {
  return (
    <>
      <main className="h-[100vh] w-[100%]">
        <div className="text-white flex justify-center items-center flex-col h-[100vh] w-[100%] ">
          <img src={logo} className="w-[5%]" />
          <h1>Welcome to ChatGPT</h1>
          <h1>Log in with your OpenAI account to continue</h1>
          <div className="flex justify-center items-center mt-4">
            <button class="bg-btnColor hover:bg-hoverbtnColor text-white font-semibold py-1.5 px-4 rounded ">
              Log in
            </button>
            <button class="bg-btnColor hover:bg-hoverbtnColor mx-2 text-white font-semibold py-1.5 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
