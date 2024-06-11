import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const ChatList = ({ users, currentUser }) => {
  console.log("list of users", users);
  const router = useRouter();
  return (
    <View className={"flex-1"}>
      <View className="flex flex-row mx-4 gap-x-5 my-8">
        {users?.length > 0 &&
          users?.map((user, index) => (
            <View key={index} className=" items-center">
              {/* <Image
                source={{ uri: user.profileUrl }}
                style={{
                  aspectRatio: 1,
                  height: 50,
                  borderRadius: 100,
                }}
              /> */}
              <LinearGradient
                colors={["#010f23", "#b3b3ba"]} // Example gradient colors
                style={{
                  borderRadius: 50,
                  padding: 3,
                }}
              >
                <View>
                  <Image
                    source={{ uri: user.profileUrl }}
                    style={{
                      aspectRatio: 1,
                      height: 50,
                      borderRadius: 100,
                      margin: 3,
                    }}
                  />
                </View>
              </LinearGradient>
              <Text>{user.username}</Text>
            </View>
          ))}
      </View>

      <View className="flex-1 ">
        <LinearGradient
          // Background Linear Gradient
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 850,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
          colors={["#010f23", "#3b4051", "#757783", "#b3b3ba"]}
        />
        <FlatList
          data={users}
          keyExtractor={(item) => Math.random()}
          contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ChatItem
              item={item}
              index={index}
              currentUser={currentUser}
              router={router}
              noBorder={index + 1 == users.length}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChatList;
