import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import { useRouter } from "expo-router";

const ChatList = ({ users, currentUser }) => {
  const router = useRouter();
  return (
    <View className={"flex-1"}>
      <FlatList
        data={users}
        keyExtractor={(item) => Math.random()}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItem
            item={item}
            index={index}
            currentUser={currentUser}
            router={router}
            noBorder={index + 1 == users.length}
          />
        )}
      />
    </View>
  );
};

export default ChatList;
