import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

function Input(props) {
  const {
    promptValue,
    setPromptValue,
    generateText,
    setRenderChat,
    setQuestion,
    setAnswer,
    setChatLoader,
  } = props;

  const onChange = (e) => {
    setPromptValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setChatLoader(true);
    setRenderChat(true);
    setQuestion(promptValue);
    let a = await generateText(promptValue);
    setAnswer(a);
    setChatLoader(false);
  };

  return (
    <>
      <div className="input flex justify-center items-center flex-col text-white sm:w-[70%] md:w-[50%] lg:w-[45%] w-[80%]">
        <div className="w-[100%]">
        <form
          onSubmit={onSubmit}
        >
          <div className="relative ">
            <textarea
              value={promptValue}
              onChange={onChange}
              className="dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] shadow-[0_0_10px_rgba(0,0,0,0.10)] p-2 bg-transparent overflow-x-hidden rounded-md outline-none w-full h-[2.75rem]"
              placeholder="Send a message"
              required
            />
            <button
              className="absolute right-[1rem] top-[0.25rem]"
              type="submit"
              disabled={promptValue.length === 0}
            >
              <SendIcon />
            </button>
          </div>
        </form>
        </div>
        <div className="text-sm mt-7">
          <p className="opacity-70 text-center">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
            <Link to="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank"> ChatGPT May 24 Version</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Input;
