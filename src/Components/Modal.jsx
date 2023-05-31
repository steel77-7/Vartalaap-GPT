import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Modal() {
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  const onChange = (e) => {
    setKey(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (key.length < 51) {
      return toast.error("Invalid API KEY");
    }
    localStorage.setItem("key", key);
    toast.success("Key added successfully");
    navigate("/home");
  };

  return (
    <>
      <main className="w-[100%] h-[100vh] bg-chatblack flex justify-center items-center flex-col">
        <h1 className="text-white text-center text-4xl mb-5 font-semibold">
          Enter your OPEN AI API KEY
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex justify-center items-center flex-col w-full"
        >
          <input
            type="text"
            required
            placeholder="Enter here"
            value={key}
            onChange={onChange}
            className="px-2 py-1 w-[35%] outline-none bg-transparent inp rounded-lg text-white"
          />
          <button className="bg-btnColor hover:bg-hoverbtnColor text-white font-semibold py-1.5 px-4 rounded mt-5">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Modal;
