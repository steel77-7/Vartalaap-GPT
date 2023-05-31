import ChatContext from "./ChatContext";
import { Configuration, OpenAIApi } from "openai";
import React from "react";

const api_key = localStorage.getItem("key");

const configuration = new Configuration({
  apiKey: api_key,
});

const openai = new OpenAIApi(configuration);

const generateText = async () => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "How are you",
      temperature: 1,
      max_tokens: 2048,
    });
    console.log(response.data.choices[0].text);
  } catch (e) {
    console.log(e);
  }
};

function ChatState(props) {
  return (
    <ChatContext.Provider value={{ generateText }}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatState;
