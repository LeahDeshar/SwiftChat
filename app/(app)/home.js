import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChatList from "../../components/ChatList";
import { query, where, getDocs } from "firebase/firestore";
import { userRef } from "../../firebaseConfig";
export default function Home() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);
  const getUsers = async () => {
    try {
      const q = query(userRef, where("userId", "!=", user?.uid));

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() });
      });
      // console.log("home data", data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      className={"flex-1 "}
      style={{
        backgroundColor: "#b3b3ba",
      }}
    >
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList currentUser={user} users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
    </View>
  );
}
