import ChatContext from "./ChatContext";
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import { toast } from "react-toastify";

const api_key = localStorage.getItem("key");

const configuration = new Configuration({
  apiKey: api_key,
});

const openai = new OpenAIApi(configuration);

const generateText = async (prompt) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 1,
      max_tokens: 2048,
    });
    return response.data.choices[0].text;
  } catch (e) {
    return "Can't Get Result!!";
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
