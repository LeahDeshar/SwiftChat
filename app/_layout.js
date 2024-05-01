import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, useSegments } from "expo-router";
import { AuthContextProvider, useAuth } from "../.expo/context/authContext";
import "../global.css";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    // if (!isAuthenticated) {
    //   segments.replace("signIn");
    // }
  }, [isAuthenticated]);
  return <Slot />;
};
// Import your global CSS file
const Layout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};
export default Layout;
