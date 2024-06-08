import { View, Text, Platform } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../util/common";
import { useAuth } from "../context/authContext";
const ios = Platform.OS == "ios";
const HomeHeader = () => {
  const { top } = useSafeAreaInsets();
  const { user } = useAuth();
  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className={
        "flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow"
      }
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className={"font-medium text-white"}>
          Chats
        </Text>
      </View>
      <View>
        <Image
          style={{
            aspectRatio: 1,
            height: hp(4.6),
            borderRadius: 100,
          }}
          source={{ uri: user?.profileUrl }}
          placeholder={blurhash}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
