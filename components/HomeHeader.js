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
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { MenuItem } from "./CustomMenuItems";
import { AntDesign, Feather } from "@expo/vector-icons";

const ios = Platform.OS == "ios";
const HomeHeader = () => {
  const { top } = useSafeAreaInsets();
  const { user, logout } = useAuth();

  const handleProfile = () => {};
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View
      style={{
        backgroundColor: "#b3b3ba",
      }}
    >
      <View
        style={{ paddingTop: ios ? top : top + 10, backgroundColor: "#3b4051" }}
        className={"flex-row justify-between px-5  pb-6 rounded-b-3xl  shadow"}
      >
        <View>
          <Text
            style={{ fontSize: hp(3) }}
            className={"font-medium text-white"}
          >
            Chats
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Menu>
            <MenuTrigger>
              <Image
                style={{
                  aspectRatio: 1,
                  height: hp(4.6),
                  borderRadius: 100,
                }}
                source={{ uri: user?.profileUrl }}
                placeholder={blurhash}
              />
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer: {
                  width: wp(40),
                  marginTop: hp(5),
                  borderRadius: 20,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                },
              }}
            >
              <MenuItem
                text={"Profile"}
                action={handleProfile}
                value={null}
                icon={<Feather name="user" size={hp(2.5)} color={"#737373"} />}
              />
              <Divider />
              <MenuItem
                text={"Sign Out"}
                action={handleLogout}
                value={null}
                icon={
                  <AntDesign name="logout" size={hp(2.2)} color={"#737373"} />
                }
              />
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const Divider = () => {
  return <View className={"p-[2px] w-full bg-neutral-100"}></View>;
};
