import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import MessageItem from "./MessageItem";

const MessagesList = ({
  scrollViewRef,
  messages,
  currentUser,
  messageUser,
}) => {
  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages?.map((message, index) => {
        return (
          <MessageItem
            key={index}
            message={message}
            currentUser={currentUser}
            messageUser={messageUser}
          />
        );
      })}
    </ScrollView>
  );
};

export default MessagesList;
