import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const MessageItem = ({ message, currentUser, messageUser }) => {
  if (currentUser?.userId == message?.userId) {
    return (
      <View className={"flex-row justify-end mb-3 mr-3 bg-black"}>
        <View style={{ width: wp(80) }}>
          <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
            <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View className="ml-3 mb-3">
        <View className="flex-row gap-3 my-3 items-center">
          <Image
            source={{ uri: messageUser?.profileUrl }}
            style={{
              height: hp(3.8),
              aspectRatio: 1,
              borderRadius: 100,
            }}
          />
          <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
            <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default MessageItem;
