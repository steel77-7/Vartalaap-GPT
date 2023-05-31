import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import gptico from "../Assets/gptico.png";

function Chat(props) {
  return (
    <>
      <main className="w-[100%] h-[70vh] flex flex-col justify-start">
        <div className="w-full hover:bg-gray-700 hover:trasition duration-75 ease-in-out">
          <div className="flex mb-5 mt-3">
            <FontAwesomeIcon
              icon={faUser}
              className="mx-2 h-[26px] py-[12px] px-[14px] rounded-full border border-white"
            />
            <p className="text-2xl relative top-[5px]">: I am question</p>
          </div>
        </div>
        <div className="w-full hover:bg-gray-700 hover:trasition duration-75 ease-in-out">
          <div className="flex mt-3">
            <img src={gptico} className="h-[4.75rem] py-[12px] px-[14px]" />
            <p className="text-2xl relative top-[18px]">: I am answer</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Chat;
