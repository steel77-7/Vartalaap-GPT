import ChatContext from "./ChatContext";

import React from "react";

function ChatState(props) {
  return <ChatContext.Provider>{props.children}</ChatContext.Provider>;
}

export default ChatState;
