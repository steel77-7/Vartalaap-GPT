import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import gptico from "../Assets/gptico.png";
import "../Chat.css";
import chat from "../Assets/chat.gif";

function Chat(props) {
  const { question, answer, chatLoader } = props;

  return (
    <>
      <main
        className="w-[100%] h-[70vh] flex flex-col justify-start"
        id="chatElement"
      >
        <div className="w-full hover:bg-gray-700 hover:trasition duration-75 ease-in-out">
          <div className="flex mb-5 mt-3">
            <FontAwesomeIcon
              icon={faUser}
              className="mx-10 h-[26px] py-[12px] px-[14px] rounded-full border border-white"
            />
            <p className="text-2xl relative top-[5px]"> {question}</p>
          </div>
        </div>
        <div className="w-full hover:trasition duration-75 ease-in-out">
          <div className="flex mt-3 hover:bg-gray-700  max-h-full">
            <img
              src={gptico}
              className="h-[4.75rem] py-[12px] px-[14px] mx-7"
            />
            <p className="text-2xl relative top-[6px] mb-10">
              {chatLoader ? (
                <img src={chat} className="h-[182px] w-[11rem] my-[-69px]" />
              ) : (
                answer
              )}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Chat;
