import React, { useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";
import Modal from "../Components/Modal";
import Default from "../Components/Default";
import Input from "../Components/Input";
import ChatContext from "../context/ChatContext";
import Chat from "../Components/Chat";

function Home() {
  const context = useContext(ChatContext);
  const [loading, setLoading] = useState(false);
  const [renderChat, setRenderChat] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const [promptValue, setPromptValue] = useState("");
  const { generateText } = context;

  const onLogout = () => {
    try {
      setLoading(true);
      auth.signOut();
      navigate("/");
      localStorage.clear();
      setLoading(false);
    } catch {
      setLoading(false);
      toast.error("Can't logout");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (
    localStorage.getItem("key") === "" ||
    localStorage.getItem("key") === null
  ) {
    return <Modal />;
  }

  return (
    <>
      <div className="flex h-[100vh] text-white bg-chatblack">
        <div className="left bg-sideBlock w-2/12">
          <button
            className="p-2 w-full font-semibold"
            onClick={() => {
              navigate("/modal");
            }}
          >
            <a className="flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0">
              Change API KEY
            </a>
          </button>
          <div className="chats">
            <ol>
              <li className="relative z-[15]" data-projection-id="3">
                <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-gray-900 group ">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative ">
                    Random Request for Help
                    <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"></div>
                  </div>
                </a>
              </li>
            </ol>
          </div>
          <button
            className="w-full text-center border-solid bg-transparent button font-semibold hover:bg-textColor rounded-sm relative"
            onClick={onLogout}
          >
            Log Out
          </button>
        </div>
        <div className="right w-10/12 flex items-center justify-center flex-col">
          {renderChat === false ? (
            <Default setPromptValue={setPromptValue} />
          ) : (
            <Chat />
          )}
          <Input
            setPromptValue={setPromptValue}
            promptValue={promptValue}
            generateText={generateText}
            setRenderChat={setRenderChat}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
