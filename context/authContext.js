import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthentication] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthentication(true);
        setUser(user);
      } else {
        setIsAuthentication(false);
        setUser(null);
      }
    });

    return unsub;
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {}
  };

  const logout = async () => {
    try {
    } catch (error) {}
  };

  const register = async (email, password, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("res", response);

      await setDoc(doc(db, "users", response?.user?.uid), {
        username,
        profileUrl,
        userId: response?.user?.uid,
      });
    } catch (e) {
      let msg = e.message
      return {
        success: true,
        msg: e.message,
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return value;
};
