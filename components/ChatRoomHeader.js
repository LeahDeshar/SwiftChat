import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const ChatRoomHeader = ({ user, router }) => {
  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-left" size={hp(3.6)} color={"#ffe"} />
            </TouchableOpacity>
            <View className="flex-row items-center gap-3">
              <Image
                source={{ uri: user?.profileUrl }}
                style={{ height: hp(4.5), aspectRatio: 1, borderRadius: 100 }}
              />
              <Text
                style={{ fontSize: hp(2.5) }}
                className="text-neutral-200 font-medium"
              >
                {user?.username}
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View className="flex-row items-center gap-8">
            <Ionicons name="call" size={hp(2.8)} color={"#5b80b6"} />
            <Ionicons name="videocam" size={hp(2.8)} color={"#5b80b6"} />
          </View>
        ),
        headerBackground: () => (
          <LinearGradient colors={["#010f23", "#3b4051"]} style={{ flex: 1 }} />
        ),
      }}
    />
  );
};

export default ChatRoomHeader;
