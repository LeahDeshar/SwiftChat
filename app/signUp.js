import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";

export default function signUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }
  };
  return (
    <CustomKeyboardView>
      <View className={"flex-1"}>
        <StatusBar style="dark" />

        <View
          style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
          className={"flex-1 gap-12"}
        >
          <View className={"items-center"}>
            <Image
              style={{ height: hp(20) }}
              resizeMode="contain"
              source={require("../assets/images/register.png")}
            />
          </View>

          <View className={"gap-10"}>
            <Text
              style={{ fontSize: hp(4) }}
              className={"font-bold tracking-wider text-center"}
            >
              Register
            </Text>
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Feather name="user" size={hp(2.7)} color={"gray"} />
              <TextInput
                style={{ fontSize: hp(2) }}
                className={"flex-1 font-semibold text-neutral-700"}
                placeholder="User Name"
                onChangeText={(value) => (usernameRef.current = value)}
                placeholderTextColor={"gray"}
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Octicons name="mail" size={hp(2.7)} color={"gray"} />
              <TextInput
                style={{ fontSize: hp(2) }}
                className={"flex-1 font-semibold text-neutral-700"}
                placeholder="Email Address"
                onChangeText={(value) => (emailRef.current = value)}
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
                secureTextEntry
                placeholderTextColor={"gray"}
                onChangeText={(value) => (passwordRef.current = value)}
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Feather name="image" size={hp(2.7)} color={"gray"} />
              <TextInput
                style={{ fontSize: hp(2) }}
                className={"flex-1 font-semibold text-neutral-700"}
                placeholder="Profile Url"
                onChangeText={(value) => (profileRef.current = value)}
                placeholderTextColor={"gray"}
              />
            </View>

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleRegister}
                  style={{ height: hp(6.5) }}
                  className="bg-indigo-500 rounded-xl justify-center items-center"
                >
                  <Text
                    className="text-white font-bold tracking-wider"
                    style={{ fontSize: hp(2.7) }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Already have an account?
              </Text>
              <Pressable onPress={() => router.push("signIn")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500"
                >
                  Sign in
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
