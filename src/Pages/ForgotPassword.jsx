import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../Components/OAuth";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Home from "../Pages/Home";

function ForgotPassword() {
  const { loggedin, checkingStatus } = useAuthStatus();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Performing user authentication
      const auth = getAuth();

      // Sending passoword reset email to given email id
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      toast.success("Email sent successfully!");
    } catch (error) {
      setLoading(false);
      // If email not exists
      toast("Email not exist");
    }
  };

  if (loading || checkingStatus) {
    return <Spinner />;
  }

  if (loggedin === true && checkingStatus === false) {
    return <Home />;
  }

  return (
    <main className="bg-white text-black w-[100%] h-[100vh] ">
      <header className="flex justify-center items-center mb-16">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0J_WUW3a11ND1TGZzbRPS36dxxKl-R9LOyA7zfacg-6Hi9040"
          className="w-[4.5%] mt-4"
        />
      </header>
      <div className="flex justify-center items-center flex-col mt-28 ">
        <h1 className="text-4xl font-bold text-textColor">Account Recovery</h1>
        <form
          className="flex justify-center items-center flex-col w-full"
          onSubmit={handleSubmit}
        >
          <input
            value={email}
            onChange={onChange}
            id="email"
            type="email"
            required
            placeholder="Email Address"
            className="bg-bgColor mt-5 w-[25%] px-2 py-3  rounded-sm  outline-none inp"
          />
          <button
            type="submit"
            className="mt-4 bg-btnColor hover:bg-hoverbtnColor mx-2 text-white font-semibold py-2 px-4 rounded w-[25%]"
          >
            Recover Account
          </button>
        </form>
        <p className="text-center text-sm mt-2">
          Create an account?{" "}
          <Link to="/signup" className="text-btnColor">
            Sign Up
          </Link>{" "}
        </p>
        <div className="my-4 flex  items-center before:border-t  before:flex-1  before:border-gray-800 after:border-t  after:flex-1  after:border-gray-800">
          <p className="text-center text-sm mx-4">OR</p>
        </div>
        <OAuth />
      </div>
    </main>
  );
}

export default ForgotPassword;