import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { logout, user } = useAuth();
  console.log("home", user);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>

      <Image
        style={{
          height: 200,
          width: 200,
        }}
        resizeMode="contain"
        source={{ uri: user?.profileUrl }}
      />
    </View>
  );
}
