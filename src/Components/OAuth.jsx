import React from "react";
import Google from "../Assets/google.ico";

function OAuth() {
  return (
    <button
      className="w-[25%] bg-bgColor text-textColor px-7 py-3 text-sm font-medium uppercase border rounded shadow-md transition duration-150 mt-2 hover:shadow-lg flex justify-center items-center"
      type="button"
    >
      <img src={Google} alt="google" className="w-8 mx-2" />
      Continue with Google
    </button>
  );
}

export default OAuth;
