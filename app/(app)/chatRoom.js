import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const chatRoom = () => {
  const item = useLocalSearchParams();
  console.log(item);
  return (
    <View>
      <Text>chatRoom</Text>
    </View>
  );
};

export default chatRoom;
