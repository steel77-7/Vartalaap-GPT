import React from "react";

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
    setChatLoader(true)
    setRenderChat(true);
    setQuestion(promptValue);
    let a = await generateText(promptValue);
    setAnswer(a);
    setChatLoader(false)
  };

  return (
    <>
      <div className="input w-full text-center ">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="w-[50%] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] shadow-[0_0_10px_rgba(0,0,0,0.10)] p-2 bg-transparent overflow-y-hidden rounded-md outline-none"
            placeholder="Send a message"
            value={promptValue}
            onChange={onChange}
          />
          <button
            className="relative -left-20 p-10"
            type="submit"
            disabled={promptValue.length === 0}
          >
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
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
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
    </>
  );
}

export default Input;
