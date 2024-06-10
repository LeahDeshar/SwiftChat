import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import MessagesList from "../../components/MessagesList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import { useAuth } from "../../context/authContext";
import { getRoomId } from "../../util/common";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
const chatRoom = () => {
  const item = useLocalSearchParams();
  const { user } = useAuth();
  const router = useRouter();
  const [message, setMessage] = useState([]);
  const textRef = useRef("");
  const inputRef = useRef(null);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(user?.userId, item?.userId);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessage([...allMessages]);
    });

    const KeyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",

      updateScrollView
    );
    return () => {
      unsub();
      KeyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    updateScrollView();
  }, [message]);

  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    });
  };

  const createRoomIfNotExists = async () => {
    try {
      let roomId = getRoomId(user?.userId, item?.userId);
      await setDoc(
        doc(db, "rooms", roomId, {
          roomId,
          createdAt: Timestamp.fromDate(new Date()),
        })
      );
    } catch (error) {}
  };

  const handleSendMessage = async () => {
    let message = textRef.current.trim();
    if (!message) return;
    try {
      let roomId = getRoomId(user?.userId, item?.userId);

      const docRef = doc(db, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");

      textRef.current = "";
      if (inputRef) inputRef?.current?.clear();
      const newDoc = await addDoc(messagesRef, {
        userId: user?.userId,
        text: message,
        profileUrl: user?.profileUrl,
        senderName: user?.username,
        createdAt: Timestamp.fromDate(new Date()),

        // clear after sending message
      });
    } catch (error) {
      Alert.alert("chatRoom", error.message);
    }
  };
  return (
    <CustomKeyboardView inChat={true}>
      <View className="flex-1 ">
        <StatusBar style="auto" />
        <ChatRoomHeader user={item} router={router} />

        <LinearGradient
          colors={["#3b4051", "#3b4051"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 12,
          }}
        />
        <View className="h-3  " />
        {/* <View className="flex-1 justify-between bg-neutral-100 overflow-visible"> */}
        <LinearGradient
          // Background Linear Gradient
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 10,
            height: 850,
            // borderTopRightRadius: 50,
            // borderTopLeftRadius: 50,
          }}
          colors={["#010f23", "#3b4051", "#757783", "#b3b3ba"]}
          // style={{ flex: 1 }}
          // colors={["rgba(1,0,19,1)", "transparent"]}
          // colors={["#4c669f", "#01040b", "#4c669f", "#000103"]}
        />
        <View className="flex-1 justify-between  overflow-visible ">
          <View className="flex-1">
            <MessagesList
              messages={message}
              currentUser={user}
              messageUser={item}
              scrollViewRef={scrollViewRef}
            />
          </View>
          <View className="pt-2" style={{ marginBottom: hp(2.7) }}>
            <View
              className={
                " mx-3 flex-row justify-between   p-2  rounded-full pl-5"
              }
              style={{
                backgroundColor: "rgba(255,255,255,0.465511)",
              }}
            >
              <TextInput
                ref={inputRef}
                onChangeText={(value) => (textRef.current = value)}
                placeholder="Type message..."
                style={{ fontSize: hp(2) }}
                placeholderTextColor={"grey"}
                className="flex-1 mr-2 text-black"
              />
              <TouchableOpacity
                onPress={handleSendMessage}
                className="bg-neutral-200 p-2 mr-[1px] rounded-full"
                style={{
                  backgroundColor: "#12499a",
                }}
              >
                <Feather name="send" size={hp(2.7)} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default chatRoom;
