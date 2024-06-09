import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import MessageItem from "./MessageItem";

const MessagesList = ({ messages, currentUser }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages?.map((message, index) => {
        return (
          <MessageItem
            key={index}
            message={message}
            currentUser={currentUser}
          />
        );
      })}
    </ScrollView>
  );
};

export default MessagesList;
