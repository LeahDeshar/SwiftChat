import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyApDDOyrJelN4fJpfSVN4gk6Oj5lw70Ebg",
  authDomain: "react-native-ccc67.firebaseapp.com",
  databaseURL: "https://react-native-ccc67-default-rtdb.firebaseio.com",
  projectId: "react-native-ccc67",
  storageBucket: "react-native-ccc67.appspot.com",
  messagingSenderId: "230809872892",
  appId: "1:230809872892:web:5ee1748fa7fd5ce6c82a79",
  measurementId: "G-JRW91B3RW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth({
  persistence: getReactNativePersistence(),
});

export const db = getFireStore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
