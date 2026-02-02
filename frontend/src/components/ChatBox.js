import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";

const ChatBox = () => {
  const { selectedChat } = ChatState();

  return (
    <Box display={{ base: selectedChat ? "flex" : "none", md: "flex" }}>
      Single Chats
    </Box>
  );
};

export default ChatBox;
