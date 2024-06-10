import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
const MessageItem = ({ message, currentUser, messageUser }) => {
  if (currentUser?.userId == message?.userId) {
    return (
      <View className={"flex-row justify-end mb-3 mr-3 "}>
        <View style={{ width: wp(80) }}>
          <View
            className="flex self-end     "
            style={{
              backgroundColor: "rgba(255,255,255,0.26)",
              borderRadius: 20,
              padding: 12,
            }}
          >
            <Text style={{ fontSize: hp(1.9) }} className="text-white">
              {message?.text}
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View className="ml-3 mb-3 ">
        <View className="flex-row gap-3 my-3 items-center">
          <Image
            source={{ uri: messageUser?.profileUrl }}
            style={{
              height: hp(3.8),
              aspectRatio: 1,
              borderRadius: 100,
            }}
          />
          <LinearGradient
            colors={["#4c669f", "#192f6a"]}
            style={{
              alignSelf: "flex-start",
              padding: 12,
              paddingHorizontal: 25,
              borderRadius: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: hp(1.9) }} className="text-white">
                {message?.text}
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
};

export default MessageItem;
