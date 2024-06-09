import { View, Text } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import MessagesList from "../../components/MessagesList";

const chatRoom = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState([]);
  console.log("item chatroom", item);
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ChatRoomHeader user={item} router={router} />

      <View className="h-3 border-b border-neutral-300" />
      <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
        <View className="flex-1">
          <MessagesList />
        </View>
      </View>
    </View>
  );
};

export default chatRoom;
