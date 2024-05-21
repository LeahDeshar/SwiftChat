import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";

export default function signIn() {
  return (
    <View className={"flex-1"}>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className={"flex-1 gap-12"}
      >
        <View className={"items-center"}>
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/login.png")}
          />
        </View>

        <View className={"gap-10"}>
          <Text
            style={{ fontSize: hp(4) }}
            className={"font-bold tracking-wider text-center"}
          >
            Sign In
          </Text>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
          >
            <Octicons name="mail" size={hp(2.7)} color={"gray"} />
            <TextInput
              style={{ fontSize: hp(2) }}
              className={"flex-1 font-semibold text-neutral-700"}
              placeholder="Email Address"
              placeholderTextColor={"gray"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
          >
            <Octicons name="lock" size={hp(2.7)} color={"gray"} />
            <TextInput
              style={{ fontSize: hp(2) }}
              className={"flex-1 font-semibold text-neutral-700"}
              placeholder="Password"
              placeholderTextColor={"gray"}
            />
          </View>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-right"
          >
            Forgot Password ?
          </Text>
        </View>
      </View>
      <Text>signIn</Text>
    </View>
  );
}
