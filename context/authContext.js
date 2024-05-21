import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthentication] = useState(undefined);

  useEffect(() => {
    // setTimeout(() => {
    setIsAuthentication(false);
    // }, 3000);
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
    } catch (error) {}
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
