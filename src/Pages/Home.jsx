import React, { useState } from "react";

function Home() {
  const [promptValue, setPromptValue] = useState("");

  const onChange = (e) => {
    setPromptValue(e.target.value);
  };

  return (
    <>
      <div className="flex h-[100vh] text-white">
        <div className="left bg-sideBlock w-2/12">
          <button className="p-2 w-full font-semibold">
            <a className="flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0">
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
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              New chat
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
        </div>
        <div className="right w-10/12 flex items-center justify-center flex-col">
          <div className="text-4xl w-full text-center font-bold my-5">
            ChatGPT
          </div>
          <div className="itemsrow flex py-4 w-[43vw] justify-around my-10">
            <div className="examples flex flex-col justify-center items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <div className="py-4">Examples</div>
              <button
                className="bg-gray-600 hover:bg-gray-700 px-4 py-4 my-2 mx-4 rounded-md w-[16vw] text-sm"
                onClick={() => {
                  setPromptValue("Explain quantum computing in simple terms");
                }}
              >
                "Explain quantum computing in simple terms" →
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 px-4 py-4 my-2 mx-4 rounded-md w-[16vw] text-sm"
                onClick={() => {
                  setPromptValue(
                    "Got any creative ideas for a 10 year old’s birthday?"
                  );
                }}
              >
                "Got any creative ideas for a 10 year old’s birthday?" →
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 px-4 py-4 my-2 mx-4 rounded-md w-[16vw] text-sm"
                onClick={() => {
                  setPromptValue(
                    "How do I make an HTTP request in Javascript?"
                  );
                }}
              >
                "How do I make an HTTP request in Javascript?" →
              </button>
            </div>
            <div className="cap flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                ></path>
              </svg>
              <div className="py-4">Capabilities</div>
              <button className="bg-gray-600 px-4 py-4 my-2 cursor-default mx-4 rounded-md w-[16vw] text-sm">
                Remembers what user said earlier in the conversation
              </button>
              <button className="bg-gray-600 px-4 py-4 my-2 cursor-default mx-4 rounded-md w-[16vw] text-sm">
                Allows user to provide follow-up corrections
              </button>
              <button className="bg-gray-600 px-4 py-4 my-2 cursor-default mx-4 rounded-md w-[16vw] text-sm">
                Trained to decline inappropriate requests
              </button>
            </div>
            <div className="lim flex flex-col justify-center items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <div className="py-4">Limitations</div>
              <button className="bg-gray-600 cursor-default px-4 py-4 my-2 mx-4 rounded-md w-[16vw] text-sm">
                May occasionally generate incorrect information
              </button>
              <button className="bg-gray-600 cursor-default px-4 py-4 my-2 mx-4 rounded-md w-[16vw] text-sm">
                May occasionally produce harmful instructions or biased content
              </button>
              <button className="bg-gray-600 cursor-default px-4 py-4 my-2 mx-4 rounded-md w-[16vw] text-sm">
                Limited knowledge of world and events after 2021
              </button>
            </div>
          </div>
          <div className="input w-full text-center">
            <form>
              <input
                type="text"
                className="w-[50%] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] shadow-[0_0_10px_rgba(0,0,0,0.10)] p-2 bg-transparent overflow-y-hidden rounded-md outline-none"
                placeholder="Send a message"
                value={promptValue}
                onChange={onChange}
              />
              <button className="relative -left-20 p-10" type="submit">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
            <div className="text-sm">
              <p className="opacity-70">
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts.
                <a
                  href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                  target="_blank"
                  className="underline"
                >
                  {" "}
                  ChatGPT May 24 Version
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
